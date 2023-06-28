import { Router } from "express";
import levelModel from "../dao/models/level.model.js";

// api/learn
const router = Router();

const questions = [
  {
    unit: 1,
    level: 2,
    exercises: [
      {
        question: "¿Como se dice manzana?",
        answers: [
          {
            text: "Tapuaj",
            isCorrect: true,
          },
          {
            text: "Tapuz",
            isCorrect: false,
          },
          {
            text: "Tut",
            isCorrect: false,
          },
          {
            text: "Lejem",
            isCorrect: false,
          },
        ],
      },
      {
        question: "¿Como se dice naranja?",
        answers: [
          {
            text: "Tapuaj",
            isCorrect: false,
          },
          {
            text: "Tapuz",
            isCorrect: true,
          },
          {
            text: "Tut",
            isCorrect: false,
          },
          {
            text: "Lejem",
            isCorrect: false,
          },
        ],
      },
      {
        question: "¿Como se dice frutilla?",
        answers: [
          {
            text: "Tapuaj",
            isCorrect: false,
          },
          {
            text: "Tapuz",
            isCorrect: false,
          },
          {
            text: "Tut",
            isCorrect: true,
          },
          {
            text: "Lejem",
            isCorrect: false,
          },
        ],
      },
      {
        question: "¿Como se dice pan?",
        answers: [
          {
            text: "Tapuaj",
            isCorrect: false,
          },
          {
            text: "Tapuz",
            isCorrect: false,
          },
          {
            text: "Tut",
            isCorrect: false,
          },
          {
            text: "Lejem",
            isCorrect: true,
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

    const levels = await levelModel.find(query)

    res.json(levels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al cargar los niveles" });
  }
});

export default router;
