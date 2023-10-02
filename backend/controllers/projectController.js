const mongoose = require('mongoose')
const Project = require('../models/projectModel')

// for future, try findByIdAndDelete()
// experiment with try catch instead of if statements

const getAllProjects = async (req,res) => {
    const allProjects = await Project.find({}).sort({createdAt: -1})

    res.status(200).json(allProjects)
}

const getProject = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id))  return res.status(404).json({ error: "Project Not Found" })

    const project = await Project.findById(id)

    if(!project) return res.status(404).json({ error: "Project Not Found" })
    
    return res.status(200).json(project)
}

const postProject = async (req,res) => {
    const {title, attachments, jotnotes} = req.body
    
    if(!title) return res.status(404).json({error: "Please fill out the Project Name!"})
    
    try{
        const newProject = await Project.create({title,attachments,jotnotes})
        
        res.status(200).json(newProject)
    } catch(error){

        res.status(400).json({error: error.message})   
    }
}

const patchProject = async (req,res) => {
    const {id} = req.params
    const {title, attachments, jotnotes} = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: "Project Not Found" })
    
    const updatedFields = {}
    if(title) updatedFields.title = title
    if(attachments) updatedFields.attachments = attachments
    
    if (jotnotes && Array.isArray(jotnotes)) {
        const jotnoteUpdates = jotnotes.map((jotnote) => ({ text: jotnote.text }));
      
        updatedFields.$push = { jotnotes: { $each: jotnoteUpdates } };
    }

    const projectUpdate = await Project.findByIdAndUpdate({ _id: id }, updatedFields, {new: true})

    if(!projectUpdate) return res.status(404).json( {error: "Project not Found" } )
    
    return res.status(200).json(projectUpdate)
}

const deleteProject = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: "Project Not Found" })

    const project = await Project.findOneAndDelete({_id: id})

    if(!project) return res.status(404).json({ error: "Project Not Found" })

    return res.status(200).json(project)
}

module.exports = { getAllProjects, getProject, postProject, patchProject, deleteProject }