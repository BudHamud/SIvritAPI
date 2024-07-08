import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Protected route accessed successfully" });
});

// const questions = {
//   title: "Palabras",
//   type: "quiz",
//   unit: 1,
//   level: 1,
//   content: [
//     {
//       question: "¿Como se dice papá?",
//       answers: [
//         { text: "Aba", isCorrect: true },
//         { text: "Ima", isCorrect: false },
//         { text: "Uga", isCorrect: false },
//         { text: "Shalom", isCorrect: false },
//       ],
//     },
//     {
//       question: "¿Como se dice mama?",
//       answers: [
//         { text: "Ima", isCorrect: true },
//         { text: "Aba", isCorrect: false },
//         { text: "Shalom", isCorrect: false },
//         { text: "Uga", isCorrect: false },
//       ],
//     },
//     {
//       question: "¿Como se dice torta?",
//       answers: [
//         { text: "Ima", isCorrect: false },
//         { text: "Aba", isCorrect: false },
//         { text: "Shalom", isCorrect: false },
//         { text: "Uga", isCorrect: true },
//       ],
//     },
//     {
//       question: "¿Como se dice hola/paz?",
//       answers: [
//         { text: "Ima", isCorrect: false },
//         { text: "Aba", isCorrect: false },
//         { text: "Shalom", isCorrect: true },
//         { text: "Uga", isCorrect: false },
//       ],
//     },
//   ],
// };

export default router;
