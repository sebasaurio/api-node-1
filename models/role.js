import { Schema, model } from 'mongoose';

const roleSchema = Schema({
  role: { type: String, required: [true, 'role is required'], unique: true },
});

export default model('Role', roleSchema);
