import bcrypt from 'bcrypt';
import 'dotenv/config'

export const comparePasswords = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    console.error('Error comparing passwords:', error);
    throw error;
  }
};

export const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  },
}

// const corsConfig = {
//   cors: {
//     origin: process.env.CLIENT_URL,
//     methods: ['GET', 'POST'],
//   },
// }