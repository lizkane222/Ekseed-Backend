const mongoose = require('mongoose');
const { User } = require('.');
const Schema = mongoose.Schema;

const UserConnectionSchema = new Schema({
    preferredName: {type: String, required: true},
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    network: {type: String, required: true},
    company: [{type: String, required: false}],
    dateReview: {type: String, required: false},
    profilePhoto: {type:String, required: false},
    
    note: [{
        tag: [{type:String, required: false}],
        content: {type: String, required: true},
        reviewed: {type: Boolean, required: false},
        bookmark: {type: Boolean, required: false},
        privacy: {type: String, required: true},
        timestamp: {type: Date, default: Date.now}
    },],
    contact: [{
        cellPhoneOne: {type: String, required: false},
        cellPhoneTwo: {type: String, required: false},
        email: {type: String, required: false},
        workName: {type: String, required: false},
        workPhone: {type: String, required: false},
        workEmail: {type: String, required: false},
        workAddress: {type: String, required: false},
    }] ,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
},
{
    timestamps: true
}
)

const UserConnection = mongoose.model('UserConnection', UserConnectionSchema);

module.exports = UserConnection;