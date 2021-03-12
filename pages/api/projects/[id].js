import projectsDB from '../../../data/Controller/projectController';

const handler = async (req, res) => {
  if(req.method === 'GET'){
    try {
      const project = await projectsDB.getProjectById(req.query.id)
      return res.status(200).json({data: project });
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  }
}

export default projectsDB.connectDB(handler);