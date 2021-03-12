import projects from './projects';

class Database{

  constructor(){}

  getAllProjects = () => new Promise ((resolve, reject) => {
      if(projects.length === 0){
        reject('No projects');
      }
      return resolve(projects);
    })

  getProjectById = (projectId) => {
    return new Promise ((resolve, reject) => {
      if(projects.length === 0){
        return reject('No projects');
      }

      const project = projects.find(project => project.id == projectId );

      if(!project){
        return reject('Project does not exist');
      }else{
        return resolve(project);
      }

    })
  }
}

const db = new Database();

export default db;