import mongoose from "mongoose";

const { Schema } = mongoose;

const msgSchema = new Schema({
  text: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  timestamp: { type: Date, default: Date.now },
});

const msgModel = mongoose.model("messages", msgSchema);

export default msgModel;
