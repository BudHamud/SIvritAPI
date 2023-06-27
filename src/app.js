import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import 'dotenv/config.js';

import { connectDB } from './config/dbConfig.js';
import auth from './routes/auth.router.js';
import protect from './routes/protected.router.js';
import learn from './routes/learn.router.js';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(cors({ credentials: true, origin: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    },
  })
);

connectDB();

app.use('/api/auth', auth);
app.use('/api/protected', protect);
app.use('/api/learn', learn); // Ruta para agregar preguntas

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});