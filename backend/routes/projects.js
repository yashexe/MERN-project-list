const express = require('express')
const router = express.Router()

const {getAllProjects, getProject, postProject, patchProject, deleteProject} = require('../controllers/projectController')


router.get('/', getAllProjects)

router.get('/:id', getProject)

router.post('/', postProject)

router.patch('/:id', patchProject)

router.delete('/:id', deleteProject)


module.exports = router