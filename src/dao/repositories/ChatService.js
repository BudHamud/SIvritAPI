import chatModel from "../models/chat.model.js";

class ChatService {
  async handleChatMessage(message) {
    try {
      const chat = new chatModel({
        users: [message.senderId, message.receiverId],
        messages: [
          {
            text: message.text,
            user: message.senderId,
            timestamp: new Date(),
          },
        ],
      });

      await chat.save();

      this.io.emit('message', message);
    } catch (error) {
      console.error("Error al manejar el mensaje de chat:", error);
      throw new Error("Error al manejar el mensaje de chat");
    }
  }

  async getAllChats() {
    try {
      const chats = await chatModel.find().populate("users", "users");
      return chats;
    } catch (error) {
      console.error("Error al obtener los chats:", error);
      throw new Error("Error al obtener los chats");
    }
  }
}

export default ChatService;