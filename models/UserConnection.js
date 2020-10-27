const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserConnectionSchema = new Schema({
    nickname: {type: String, required: true},
    firstName:  {type: String, required: false},
    lastName: {type: String, required: false},
    network: {type: String, required: true},
    company: {type: String, required: false},
    dateReview: {type: String, required: false},
    note: [{
        tag: {type:[String], required: false},
        content: {type: String, required: true},
        reviewed: {type: Boolean, required: false},
        bookmark: {type: Boolean, required: false},
        privacy: {type: String, required: true}
    },
    ],
},
{
    timestamps: true
}
)

const UserConnection = mongoose.model('UserConnection', UserConnectionSchema);

module.exports = UserConnection;