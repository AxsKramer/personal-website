import {Schema,model, models} from 'mongoose';

const messageSchema = new Schema({
  name:{
    type: String,
    trim: true,
    required: true,
    uppercase: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true
  },
  message: {
    type: String,
    trim: true,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export default models.Message || model('Message', messageSchema);