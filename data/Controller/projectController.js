import Project from '../models/Project';
import mongoose from 'mongoose';

class Projects{
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

  getAllProjects= async () => {
    const projects = await Project.find({});
    return new Promise((resolve, reject) => {
      if(projects.length === 0){
        return reject('No projects');
      }
      return resolve(projects)
    })
  };

  getProjectById = async (projectId) => {
    const project = await Project.findById({_id: projectId});
    return new Promise((resolve, reject) => {
      if(!project){
        return reject('No project');
      }
      resolve(project)
    })
  }

  createProject = async (newProject) => {
    const newproject = new Project(newProject);
    await newproject.save();
  } 

}


const projects = new Projects();

export default projects;