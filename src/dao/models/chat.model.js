import mongoose from 'mongoose';

const { Schema } = mongoose;

const chatSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, required: true }],
  messages: [
    {
      text: { type: String },
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const chatModel = mongoose.model('chats', chatSchema);

export default chatModel;