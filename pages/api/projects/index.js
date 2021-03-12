import projectsDB from '../../../data/Controller/projectController';

const handler = async (req, res) => {
  if(req.method === 'GET'){
    try {
      const projects = await projectsDB.getAllProjects();
  
      return res.status(200).json({count: projects.length , data: projects, });
  
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  }
  if(req.method === 'POST'){
    try {
      const project = await projectsDB.createProject(req.body);
  
      return res.status(200).json({data: project});
  
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  }
}

export default projectsDB.connectDB(handler);

