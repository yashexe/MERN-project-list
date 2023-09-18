const express = require('express')
const mongoose = require('mongoose')

const app = express()

require('dotenv').config({ path: './config/.env' });

PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/', (req,res, next) => {
    console.log(`NEW_REQUEST: ${req.method} Request at localhost:${PORT}${req.path}`)
    next()
})



mongoose.connect(process.env.MONGO_URI)
    .then( () => {
        app.listen(PORT, () => {
            console.log(`Server: http://localhost:${PORT}`)
        })
    }).catch( (error) => {
        console.log(error)
    })
