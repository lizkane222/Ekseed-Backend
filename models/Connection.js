const mongoose = require('mongoose');
// const { User } = require('.');
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
    preferredName: {type: String, required: true},
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    network: {type: String, required: true},
    company: [{type: String, required: false}],
    dateReview: {type: String, required: false},
    profilePhoto: {type:String, required: false},
    cellPhoneOne: {type: String, required: false},
    cellPhoneTwo: {type: String, required: false},
    email: {type: String, required: false},
    homeAddress: {type: String, required: false},
    workPhone: {type: String, required: false},
    workEmail: {type: String, required: false},
    workAddress: {type: String, required: false},
    birthday: {type: String, required: false},
    moreContact: {type: String, required: false},

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note"            
    }]
},
{
    timestamps: true
}
)

const Connection = mongoose.model('Connection', ConnectionSchema);

module.exports = Connection;