const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    attachments: {
        type: String
    },
    jotnotes: [ {
            text: {
                type: String
            }
        }
    ]
}, { timestamps: true }, { strict: 'throw' })

module.exports = mongoose.model('Project', projectSchema)