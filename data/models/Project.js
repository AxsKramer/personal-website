import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  deployed: {
    type: String,
    required: true,
    trim: true
  },
  techs: {
    type: String,
    required: true,
    trim: true
  },
  github: {
    type: String,
    required: true,
    trim: true
  },
  website: {
    type: String,
    required: true,
    trim: true
  }
});


export default mongoose.models.Project || mongoose.model('Project', projectSchema);

 