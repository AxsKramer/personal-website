import db from '../../../data/databse';

async function projectById (req, res) {
  try {
    const project = await db.getProjectById(req.query.id)

    res.status(200).json({data: project });

  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export default projectById;