import { Router } from "express";
import { Server } from "socket.io";
import ChatService from "../dao/repositories/ChatService.js";

const router = Router();
const cs = new ChatService();

export const initializeSocketIO = (server) => {
  const io = new Server(server, {
    cors: {
      origin: true,
    },
    allowEIO3: true,
  });

  io.on("connection", (socket) => {
    // Algo cuando se conectan

    socket.on("message", (id, message) => {
      cs.handleChatMessage(id, message);
      io.emit("message", message);
    });

    socket.on("disconnect", () => {
      // Algo cuando se desconectan
    });
  });

  return io;
};

router.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const chats = await cs.getAllChats(id);
    res.status(200).json(chats);
  } catch (error) {
    console.error("Error al obtener los chats:", error);
    res.status(500).json({ error: "Error al obtener los chats" });
  }
});

router.post('/', async (req, res) => {
  const { users } = req.body

  try {
    const newChat = await cs.createChat(users)
    res.status(200).json(newChat);
  } catch (error) {
    console.error("Error al obtener los chats:", error);
    res.status(500).json({ error: "Error al obtener los chats" });
  }
})

export default router;
