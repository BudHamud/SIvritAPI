import mongoose from 'mongoose';

const { Schema } = mongoose;

const wordSchema = new Schema({
    word: { type: String, required: true, unique: true },
});

const wordModel = mongoose.model('words', wordSchema);

export default wordModel;
