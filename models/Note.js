const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    tag: [{type:String, required: false}],
    content: {type: String, required: true},
    reviewed: {type: Boolean, required: false},
    bookmark: {type: Boolean, required: false},
    privacy: {type: Boolean, required: true},
    
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    connection: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Connection"
    },
},
    {
        timestamps: true
    }
)

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;