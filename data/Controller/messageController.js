import Message from '../models/Message';
import mongoose from 'mongoose';

class Messages{
  constructor(){
    this.mongooseConf = {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  }

  connectDB = handler => async (req, res) => {

    if(mongoose.connections[0].readyState){
      return handler(req,res);
    }
    await mongoose.connect(process.env.mongodburl, this.mongooseConf);
    console.log('db connected');
    return handler(req,res);
  }

  getAllMessages= async () => {
    const messages = await Message.find({});
    return new Promise((resolve, reject) => {
      if(messages.length === 0){
        return reject('No Messages');
      }
      return resolve(messages)
    })
  };

  createMessage = async (newMessage) => {
    const newmessage = new Message(newMessage);
    await newmessage.save();
  } 
}

const messages = new Messages();

export default messages;