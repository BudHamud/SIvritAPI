import { Router } from "express";
import questionModel from "../dao/models/question.model.js";

const router = Router();

router.post("/questions", async (req, res) => {
  try {
    const questions = req.body; // Array de preguntas en formato JSON

    // Almacena las preguntas en la base de datos
    await questionModel.insertMany(questions);

    res.status(201).json({ message: "Preguntas agregadas exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al agregar las preguntas" });
  }
});

export default router;