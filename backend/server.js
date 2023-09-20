const express = require('express')
const app = express()

const mongoose = require('mongoose')

require('dotenv').config({ path: './config/.env' });
PORT = process.env.PORT || 3000

const routes = require('./routes/projects')

app.use(express.json())


app.use('/', (req,res, next) => {
    console.log(`NEW_REQUEST: ${req.method} Request at localhost:${PORT}${req.path}`)
    next()
})


app.use('/api/projects', routes)


mongoose.connect(process.env.MONGO_URI)
    .then( () => {
        app.listen(PORT, () =>  console.log(`Server: http://localhost:${PORT}`) )
    }).catch( error => console.error(error))
