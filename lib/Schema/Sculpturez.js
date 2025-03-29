import mongoose from 'mongoose';

const SculpturezSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    heading: {
      type: String,
      required: [true, 'Heading is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
  }
);

export default mongoose.models.Sculpturez || mongoose.model("Sculpturez", SculpturezSchema, "Sculpturez");