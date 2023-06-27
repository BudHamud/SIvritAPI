import mongoose from "mongoose";

const levelSchema = new mongoose.Schema({
  unit: { type: Number, required: true },
  level: { type: Number, required: true },
  exercises: [
    {
      question: {
        type: String,
        required: true,
      },
      answers: { type: Array, default: [] },
    },
  ],
});

const levelModel = mongoose.model("levels", levelSchema);

export default levelModel;
