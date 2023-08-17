import chatModel from "../models/chat.model.js";
import msgModel from "../models/message.model.js";
import userModel from "../models/user.model.js";

class ChatService {
  async createChat(users) {
    try {
      const newChat = await chatModel.create({ users: users, messages: [] });

      users.forEach(async (id) => {
        const user = await userModel.findById(id);
        user.chats.push(newChat._id);
        user.save();
      });

      return newChat;
    } catch (err) {
      console.error("Error al crear chat:", err);
      throw new Error("Error al crear chat");
    }
  }

  async handleChatMessage(id, message) {
    try {
      const chat = await chatModel.findById(id);

      if (chat) {
        const newMsg = await msgModel.create({
          text: message.text,
          user: message.user,
          chat: message.chat,
          timestamp: new Date(),
        });
        chat.messages.push(newMsg);
        await chat.save();
      }
    } catch (error) {
      console.error("Error al manejar el mensaje de chat:", error);
      throw new Error("Error al manejar el mensaje de chat");
    }
  }

  async getAllChats(id) {
    try {
      const chat = await chatModel
        .findById(id)
        .populate({
          path: "messages",
          populate: { path: "user", model: "users" },
        })
        .populate("users");

      return chat;
    } catch (error) {
      console.error("Error al obtener los chats:", error);
      throw new Error("Error al obtener los chats");
    }
  }
}

export default ChatService;
