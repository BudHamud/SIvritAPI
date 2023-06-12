import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  level: { type: Number, required: true },
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: [
      {
        text: {
          type: String,
          required: true,
        },
        isCorrect: {
          type: Boolean,
          required: true,
        },
      },
    ],
    required: true,
  },
});

const questionModel = mongoose.model("questions", questionSchema);

export default questionModel;
