import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    personalInfo: {
      fullName: { type: String, required: true },
      title: { type: String, required: true },
      email: String,
      phone: String,
      location: String,
      website: String,
      bio: String,
      linkedin: String,
      github: String,
      twitter: String,
      portfolio: String,
    },
    skills: [
      {
        id: Number,
        name: { type: String, required: true },
        level: {
          type: String,
          enum: ['beginner', 'intermediate', 'advanced', 'expert'],
          default: 'intermediate',
        },
      },
    ],
    experiences: [
      {
        id: Number,
        company: { type: String, required: true },
        position: { type: String, required: true },
        location: String,
        startDate: String,
        endDate: String,
        current: Boolean,
        description: String,
      },
    ],
    projects: [
      {
        id: Number,
        name: { type: String, required: true },
        description: { type: String, required: true },
        technologies: [String],
        liveUrl: String,
        githubUrl: String,
        imageUrl: String,
      },
    ],
    theme: {
      type: String,
      enum: ['modern', 'classic', 'minimal'],
      default: 'modern',
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft',
    },
  },
  {
    timestamps: true,
  }
);

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
