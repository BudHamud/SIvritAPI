import mongoose from "mongoose";

const levelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  unit: { type: Number, required: true },
  level: { type: Number, required: true },
  content: [
    // {
    //   question: {
    //     type: String,
    //   },
    //   answers: { type: Array },
    // },
  ],
});

const levelModel = mongoose.model("levels", levelSchema);

export default levelModel;
