import messagesDB from '../../../data/Controller/messageController';

const handler = async (req, res) => {
  if(req.method === 'GET'){
    try {
      const messages = await messagesDB.getAllMessages();
  
      return res.status(200).json({count: messages.length , data: messages, });
  
    } catch (error) {
      return res.status(500).json({message: "hello"});
    }
  }
  if(req.method === 'POST'){
    try {
      await messagesDB.createMessage(req.body); 
  
      return res.status(200).json({message: 'New message'});
  
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  }
}

export default messagesDB.connectDB(handler);