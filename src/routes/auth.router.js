import { Router } from "express";
import jwt from "jsonwebtoken";
import { comparePasswords } from "../utils.js";
import bcrypt from "bcrypt";
import userModel from "../dao/models/user.model.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Registration failed" });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    req.session.userId = user._id;

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    };

    res.cookie('token', token, cookieOptions).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Login failed' });
  }
});

router.post('/logout', (req, res) => {
  try {
    req.session.destroy(); // Destruir la sesión de express-session
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    };
    res.clearCookie('token', cookieOptions).json({ success: 'Logout successful' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Logout failed' });
  }
});

router.get('/checkLoggedIn', (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ isLoggedIn: false });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.json({ isLoggedIn: false });
    }

    const { userId } = decoded;

    const loggedUser = await userModel.findById(userId)
    
    if (loggedUser) {
      return res.json({ isLoggedIn: true });
    }
    return res.json({ isLoggedIn: false });
  });
});

export default router;