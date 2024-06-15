import mongoose from 'mongoose';

// Define the schema for the User
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Check if the model already exists to prevent re-declaration
const User = mongoose.models.heros || mongoose.model('heros', UserSchema);

export default User;
