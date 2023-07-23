import chatModel from "../models/chat.model.js";
import msgModel from "../models/message.model.js";

class ChatService {

  async handleChatMessage(message) {
    try {
      const chat = new msgModel({
        text: message.text,
        user: message.user,
        timestamp: new Date(),
      });
      console.log(chat);

      await chat.save();
    } catch (error) {
      console.error("Error al manejar el mensaje de chat:", error);
      throw new Error("Error al manejar el mensaje de chat");
    }
  }

  async getAllChats() {
    try {
      // const chats = await chatModel.find().populate("users", "users");
      const msgs = await msgModel.find()
      return msgs;
    } catch (error) {
      console.error("Error al obtener los chats:", error);
      throw new Error("Error al obtener los chats");
    }
  }
}

export default ChatService;
