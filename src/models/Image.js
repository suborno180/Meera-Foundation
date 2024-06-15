// models/Image.js
import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  data: {
    type: Buffer,
    required: true,
  },
});

const Image = mongoose.models.images || mongoose.model('images', imageSchema);

export default Image;
