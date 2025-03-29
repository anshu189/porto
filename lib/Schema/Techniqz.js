import mongoose from 'mongoose';

const TechniqzSchema = new mongoose.Schema(
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
    shortDescription: {
      type: String,
      required: [true, 'Short description is required'],
    },
    readMoreLink: {
      type: String,
      required: [true, 'Read more link is required'],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Techniqz || mongoose.model('Techniqz', TechniqzSchema);
