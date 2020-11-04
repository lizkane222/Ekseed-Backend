const db = require("../models");

const index = (req, res) => {
    console.log("backend note controller @ index")
    db.Note.find({user: req.userId}, {connection: req.body.connection}, (err, foundNotes) => {
        if (err) {
            console.log("Error in note index:", err);
            return res.status(500).json({message: "Error. Please try again."});
        }
        if(!foundNotes.length) {
            return res.status(200).json({message: "No notes found in database."});
        }
        res.status(200).json({"notes": foundNotes});
    });
};

// const show = (req, res) => {
//     db.Note.findById({connection: req.connectionId}, req.params.id, (err, foundNote) => {
//         if (err) console.log("Error in Note #show:", err);

//         if (!foundNote) {
//             return res
//             .status(200)
//             .json({message: "Note with provided ID is not found."});
//         }
//         res.status(200).json({"noteId": foundNote});
//     });
// };


const create = (req, res) => {
    const userId = req.userId
    const connectionId = req.params.connections
    console.log("create new note: user", userId, "note", connection)

    db.Note.create(req.body, (err, savedNote) => {
        if (err) console.log("Error in Note # create:", err);

        db.Connection.findById(connectionId, (err, foundConnection) => {
            if (err) console.log("Error in Note @ create for find CONNECTION ID:", err);
            // foundUser.foundConnection.notes.push(savedNote);
            // foundUser.foundConnection.save()
            // res.status(201).json({"connection": savedNote});
        
            db.User.findById(userId, (err, foundUser) => {
                if (err) console.log("Error in Note @ create for find USER ID: ", err);
                    foundUser.foundConnection.notes.push(savedNote);
                    foundUser.foundConnection.save()
                    res.status(201).json({"connection": savedNote});
            })
        });
    });
};


// const update = (req, res) => {
//     db.Note.findByIdAndUpdate(req.params.id, req.body, {new: true},
//         (err, updatedNote) => {
//             if (err) console.log("Error in Note #update : ", err);

//             if (!updatedNote) {
//                 return res.status(200).json({
//                     message: "noteId with provided ID could not be found for update.",
//                 });
//             }

//             res.status(200).json({"noteId": updatedNote});
//         }
//     );
// };


// const destroy = (req, res) => {
//     db.Note.findByIdAndDelete(req.params.id, (err, deletedNote) => {
//         if (err) console.log("Error in Note # destroy : ", err);

//         if (!deletedConnection) {
//             return res.status(200).json({
//                 message: "Note with provided ID could not be found for delete."
//             })
//         }

//         res.status(200).json({"note": deletedNote});
//     });
// };


module.exports = {
    /*index, create  , show, update,  destroy */
}