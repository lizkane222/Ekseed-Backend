const db = require("../models");


//  INDEX ALL USERS
const index = (req, rest) => {
    console.log("backend User controller @ index")
    db.User.find({}, (err, foundUser) => {
        if (err) {
            console.log("Error in user index:", err);
            return rest.status(500).json({message: "Error. Please try again."})
        }

        if(!foundUser) {
            return res.status(200).json({message: "No User Found in database."});
        }

        res.status(200).json({User : foundUser});
    });
};



// SHOW USER


const show = (req, res) => {
    console.log(req.userId)
    db.User.findById(req.userId).populate("connections").exec(
        (err, foundUser) => {
           if (err) console.log("Error in User show:", err);
           console.log(foundUser)
           if (!foundUser) {
               return res
               .status(200)
               .json({message: "User with provided ID is not found."});
           }
   
           res.status(200).json({ User: foundUser });
    });
};

// CREATE NEW USER 
const create = (req, res) => {
    db.User.create(req.body, (err, savedUser) => {
        if (err) console.log("Error in User @ create:", err);
    });
};

// UPDATE USER
const update = (req, res) => {
    db.User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedUser) => {
            if (err) console.log("Error in User @ update:", err);

            if (!updatedUser) {
                return res.status(200).json({
                    message: "User with provided Id could not be found for update."
                });
            }
            res.status(200).json({User: updatedUser});
        }
    );
};

// DELETE USER
const destroy = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if (err) console.log("Error in User @ destroy", err);

        if (!deletedUser) {
            return res.status(200).json({
                message: "User with provided ID could not be found for delete."
            });
        }

        res.status(200).json({ User : deletedUser});
    });
};


// EXPORTS
module.exports = {
    // index,
    show,
    create,
    update,
    destroy
};