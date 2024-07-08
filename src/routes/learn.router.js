import { Router } from "express";
import levelModel from "../dao/models/level.model.js";

// api/learn
const router = Router();

const questions = {
  title: "Palabras",
  type: "quiz",
  unit: 1,
  level: 1,
  content: [
    {
      question: "¿Como se dice papá?",
      answers: [
        { text: "Aba", isCorrect: true },
        { text: "Ima", isCorrect: false },
        { text: "Uga", isCorrect: false },
        { text: "Shalom", isCorrect: false },
      ],
    },
    {
      question: "¿Como se dice mama?",
      answers: [
        { text: "Ima", isCorrect: true },
        { text: "Aba", isCorrect: false },
        { text: "Shalom", isCorrect: false },
        { text: "Uga", isCorrect: false },
      ],
    },
    {
      question: "¿Como se dice torta?",
      answers: [
        { text: "Ima", isCorrect: false },
        { text: "Aba", isCorrect: false },
        { text: "Shalom", isCorrect: false },
        { text: "Uga", isCorrect: true },
      ],
    },
    {
      question: "¿Como se dice hola/paz?",
      answers: [
        { text: "Ima", isCorrect: false },
        { text: "Aba", isCorrect: false },
        { text: "Shalom", isCorrect: true },
        { text: "Uga", isCorrect: false },
      ],
    },
  ],
};

const verbs = [
  { verb: 'גר', group: 'פעל', infinitive: "לגור", present: ['גר', 'גרה', 'גרים','גרות'], meaning: 'vivir' },
  { verb: 'בא', group: 'פעל', infinitive: "לבוא", present: ['בא', 'באה', 'באים','באות'], meaning: 'ir' },
  { verb: 'רץ', group: 'פעל', infinitive: "לרוץ", present: ['רץ', 'רצה', 'רצים','רצות'], meaning: 'correr' },
  { verb: 'שר', group: 'פעל', infinitive: "לשאר", present: ['שר', 'שרה', 'שרים','שרות'], meaning: 'cantar' },
  { verb: 'שם', group: 'פעל', infinitive: "לשאם", present: ['שם', 'שמה', 'שמים','שמות'], meaning: 'poner' },
  { verb: 'הולך', group: 'פעל', infinitive: "ללכת", present: ['הולך', 'הולכת', 'הולכים','הןלכות'], meaning: 'caminar' },
  { verb: 'כותב', group: 'פעל', infinitive: "לכתוב", present: ['כותב', 'כותבת', 'כותבים','כותבות'], meaning: 'escribir' },
  { verb: 'לומד', group: 'פעל', infinitive: "ללמוד", present: ['לומד', 'לומדת', 'לומדים','לומדות'], meaning: 'estudiar' },
  { verb: 'עובד', group: 'פעל', infinitive: "לעבוד", present: ['עובד', 'עובדת', 'עובדים','עובדות'], meaning: 'trabajar' },
  { verb: 'אומר', group: 'פעל', infinitive: "לומר", present: ['אומר', 'אומרת', 'אומרים','אומרות'], meaning: 'decir' },
  { verb: 'אוכל', group: 'פעל', infinitive: "לאכול", present: ['אוכל', 'אוכלת', 'אוכלים','אוכלות'], meaning: 'comer/comida' },
  { verb: 'קורא', group: 'פעל', infinitive: "לקרוא", present: ['קורא', 'קוראת', 'קוראים','קוראות'], meaning: 'leer' },
  { verb: 'אוהב', group: 'פעל', infinitive: "לאהוב", present: ['אוהב', 'אוהבת', 'אוהבים','אוהבות'], meaning: 'amar/querer' },
  { verb: 'שומע', group: 'פעל', infinitive: "לשמוע", present: ['שומע', 'שומעת', 'שומעים','שומעות'], meaning: 'oir/escuchar' },
  { verb: 'יודע', group: 'פעל', infinitive: "לעדת", present: ['יודע', 'יודעת', 'יודעים','יודעות'], meaning: 'saber' },
  { verb: 'רוצה', group: 'פעל', infinitive: "לרצות", present: ['רוצה', 'רוצה', 'ירוצים', 'רוצות'], meaning: 'querer' },
  { verb: 'שותה', group: 'פעל', infinitive: "לשתות", present: ['שותה', 'שותה', 'שותים', 'שותות'], meaning: 'tomar' },
  { verb: 'קונה', group: 'פעל', infinitive: "לקנות", present: ['קונה', 'קונה', 'קונים', 'קונות'], meaning: 'comprar' },
  { verb: 'רואה', group: 'פעל', infinitive: "לראות", present: ['רואה', 'רואה', 'רואים', 'רואות'], meaning: 'mirar' },
  { verb: 'בונה', group: 'פעל', infinitive: "לבנות", present: ['בונה', 'בונה','בונים', 'בונות'], meaning: 'construir' },
  { verb: 'עושה', group: 'פעל', infinitive: "לעשות", present: ['עושה', 'עושה', 'עושים', 'עושות'], meaning: 'hacer' },
  { verb: 'עולה', group: 'פעל', infinitive: "לעלות", present: ['עולה', 'עולה', 'עולים', 'עולום'], meaning: 'subir' },
  { verb: 'עונה', group: 'פעל', infinitive: "לענות", present: ['עונה', 'עונה', 'עונים', 'עונות'], meaning: 'responder' },
];

const numbers = [
  { number: 0, masculine: 'אפס', feminine: 'אפס' },
  { number: 1, masculine: 'אחד', feminine: 'אחת' },
  { number: 2, masculine: 'שניים', feminine: 'שתיים' },
  { number: 3, masculine: 'שלושה', feminine: 'שלוש' },
  { number: 4, masculine: 'ארבעה', feminine: 'ארבע' },
  { number: 5, masculine: 'חמישה', feminine: 'חמש' },
  { number: 6, masculine: 'שישה', feminine: 'שש' },
  { number: 7, masculine: 'שבעה', feminine: 'שבע' },
  { number: 8, masculine: 'שמונה', feminine: 'שמונה' },
  { number: 9, masculine: 'תשעה', feminine: 'תשה' },
  { number: 10, masculine: 'עשרה', feminine: 'עשר' },
  { number: 11, masculine: 'אחת עשרה', feminine: 'אחד עשר' },
  { number: 12, masculine: 'שתים עשרה', feminine: 'שנים עשר' },
  { number: 20, masculine: 'עשרים', feminine: 'שנים עשר' },
  { number: 30, masculine: 'שלושים', feminine: 'שנים עשר' },
  { number: 40, masculine: 'ארבעים', feminine: 'שנים עשר' },
  { number: 50, masculine: 'חמישים', feminine: 'שנים עשר' },
  { number: 60, masculine: 'שישים', feminine: 'שנים עשר' },
  { number: 70, masculine: 'שבעים', feminine: 'שנים עשר' },
  { number: 80, masculine: 'שמונים', feminine: 'שנים עשר' },
  { number: 90, masculine: 'תשעים', feminine: 'שנים עשר' },
  { number: 100, masculine: 'מאה', feminine: 'שנים עשר' },
]

const days = [
  { name: 'יום ראשון', day: 'domingo' },
  { name: 'יום שני', day: 'lunes' },
  { name: 'יום שלישי', day: 'martes' },
  { name: 'יום רביעי', day: 'miercoles' },
  { name: 'יום חמישי', day: 'jueves' },
  { name: 'יום שישי', day: 'viernes' },
  { name: 'יום שבת', day: 'sabado' }
]

const specialWords = [
  { word: 'ה', meaning: 'el/la/los/las' },
  { word: 'ו', meaning: 'y' },
  { word: 'מ', meaning: 'de' },
  { word: 'ב', meaning: 'en' },
  { word: 'מי', meaning: 'quién' },
  { word: 'זה', meaning: 'este ♂' },
  { word: 'זאת', meaning: 'este ♀' },
  { word: 'אלה', meaning: 'estos ♂/♀' },
  { word: 'מתי', meaning: 'cuándo' },
  { word: 'מאיו', meaning: 'de dónde' },
  { word: 'איפו', meaning: 'dónde' },
  { word: 'עם', meaning: 'con' },
]

const simpleWords = [
  { word: 'גם', meaning: 'también' },
  { word: 'אמא', meaning: 'mamá' },
  { word: 'אבא', meaning: 'papá' },
  { word: 'כן', meaning: 'si' },
  { word: 'לא', meaning: 'no' },
  { word: 'מיץ', meaning: 'jugo' },
  { word: 'פה', meaning: 'acá' },
  { word: 'שם', meaning: 'allá' },
  { word: 'או', meaning: 'o' },
  { word: 'איש', meaning: 'persona/hombre' },
  { word: 'אישה', meaning: 'mujer/esposa' },
  { word: 'אנשים', meaning: 'personas' },
  { word: 'הרבה', meaning: 'mucho' },
  { word: 'עוד', meaning: 'más' },
  { word: 'אבל', meaning: 'pero' },
  { word: 'עכשיו', meaning: 'ahora' },
]

const complexWords = [
  { present: ['חבר', 'חברה'], plural: ['חברים','חברות'], meaning: 'amigo' },
  { present: ['מורה', 'מורה'], plural: ['מורים','מורות'], meaning: 'maestro' },
  { present: ['תלמיד', 'תלמידה'], plural: ['תלמידים','תלמידות'], meaning: 'alumno' },
  { present: ['ילד', 'ילדה'], plural: ['ילדים','ילדות'], meaning: 'niño' },
]

const wordsWithGenre = [
  { present: 'ספר', plural: 'ספרים', genre: 'זכר', meaning: 'libro' },
  { present: 'טלוויזיה', plural: 'טלוויזיות', genre: 'נקבה', meaning: 'televisión' },
  { present: 'טלפון', plural: 'טלפונים', genre: 'זכר', meaning: 'celular' },
  { present: 'סופרמרקט', plural: 'סופרמרקטים', genre: 'זכר', meaning: 'supermercado' },
]


router.post("/", async (req, res) => {
  try {
    // Almacena las preguntas en la base de datos
    const result = await levelModel.insertMany(read);

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
