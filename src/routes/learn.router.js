import { Router } from "express";
import levelModel from "../dao/models/level.model.js";

// api/learn
const router = Router();

const questions = [
  {
    unit: 1,
    level: 1,
    exercises: [
      {
        question: "¿Como se dice papa?",
        answers: [
          {
            text: "Aba",
            isCorrect: true,
          },
          {
            text: "Ima",
            isCorrect: false,
          },
          {
            text: "Uga",
            isCorrect: false,
          },
          {
            text: "Shalom",
            isCorrect: false,
          },
        ],
        question: "¿Como se dice mama?",
        answers: [
          {
            text: "Ima",
            isCorrect: true,
          },
          {
            text: "Aba",
            isCorrect: false,
          },
          {
            text: "Shalom",
            isCorrect: false,
          },
          {
            text: "Uga",
            isCorrect: false,
          },
        ],
        question: "¿Como se dice torta?",
        answers: [
          {
            text: "Ima",
            isCorrect: false,
          },
          {
            text: "Aba",
            isCorrect: false,
          },
          {
            text: "Shalom",
            isCorrect: false,
          },
          {
            text: "Uga",
            isCorrect: true,
          },
        ],
        question: "¿Como se dice hola/paz?",
        answers: [
          {
            text: "Ima",
            isCorrect: false,
          },
          {
            text: "Aba",
            isCorrect: false,
          },
          {
            text: "Shalom",
            isCorrect: true,
          },
          {
            text: "Uga",
            isCorrect: false,
          },
        ],
      },
    ],
  },
];

router.post("/", async (req, res) => {
  try {
    // Almacena las preguntas en la base de datos
    const result = await levelModel.insertMany(questions);

    res.status(201).json({ message: "Niveles agregadas exitosamente", result  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al agregar los niveles" });
  }
});

router.get("/", async (req, res) => {
  try {
    const { level, unit } = req.query;

    let query = {};

    if (level) {
      query.level = level;
    }

    if (unit) {
      query.unit = unit;
    }

    const levels = await levelModel.find(query);
    res.json(levels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al cargar los niveles" });
  }
});

export default router;
