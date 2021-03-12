import db from '../../../data/databse';

async function allProjects (req, res) {
  try {
    const projects = await db.getAllProjects();

    res.status(200).json({data: projects, count: projects.length });

  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export default allProjects;