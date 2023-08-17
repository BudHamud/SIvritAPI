import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImg: { type: String, default: 'https://res.cloudinary.com/dcmic2snw/image/upload/v1687813759/Beit%20Sefer/logo_lkbwvq.svg' },
  progress: {
    unit: { type: Number, default: 1 },
    level: { type: Number, default: 1 }
  },
  xp: { type: Number, default: 0 },
  chats: [{ type: Schema.Types.ObjectId, required: true, ref: "chats", default: [] }]
});

const userModel = mongoose.model('users', userSchema);

export default userModel;
