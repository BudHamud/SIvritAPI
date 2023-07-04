import { Router } from 'express';
import { Server } from 'socket.io';
import ChatService from '../dao/repositories/ChatService.js';

const router = Router();
const cs = new ChatService();

// Crear una instancia de socket.io y adjuntarla al enrutador
const io = new Server();
router.io = io;

// Configurar el evento de conexión de socket.io
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  socket.on('message', (message) => {
    // Manejar los mensajes recibidos del cliente
    handleChatMessage(message);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Ruta para obtener todos los chats
router.get('/', async (req, res) => {
  try {
    const chats = await cs.getAllChats();
    res.json(chats);
  } catch (error) {
    console.error('Error al obtener los chats:', error);
    res.status(500).json({ error: 'Error al obtener los chats' });
  }
});

export default router;