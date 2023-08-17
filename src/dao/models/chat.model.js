import mongoose from 'mongoose';

const { Schema } = mongoose;

const chatSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, required: true, ref: 'users' }],
  messages: [
    { type: Schema.Types.ObjectId, required: true, ref: "messages" }
  ],
});

const chatModel = mongoose.model('chats', chatSchema);

export default chatModel;