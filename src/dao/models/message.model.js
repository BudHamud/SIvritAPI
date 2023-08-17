import mongoose from "mongoose";

const { Schema } = mongoose;

const msgSchema = new Schema({
  chat: { type: Schema.Types.ObjectId, ref: "chats" },
  text: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "users" },
  timestamp: { type: Date, default: Date.now },
});

const msgModel = mongoose.model("messages", msgSchema);

export default msgModel;
