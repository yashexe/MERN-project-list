const mongoose = require('mongoose')
const Project = require('../models/projectModel')

const getAllProjects = async (req,res) => {
    allProjects = await Project.find({}).sort({createdAt: -1})

    res.status(200).json(allProjects)
}

const getProject = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Project Not Found" })
    }

    const project = await Project.findById(id)

    if(!project) {
        return res.status(404).json({ error: "Project Not Found" })
    }

    return res.status(200).json(project)
}

const postProject = async (req,res) => {

}

const patchProject = async (req,res) => {

}

const deleteProject = async (req,res) => {

}

module.exports = { getAllProjects, getProject, postProject, patchProject, deleteProject }