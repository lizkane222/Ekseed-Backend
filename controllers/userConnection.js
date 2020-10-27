const db = require("../models");


const index = (req, res) => {
    db.UserConnection.find({}, (err, foundUserConnections) => {
        if (err) {
            console.log("Error in user connection index:", err);
            return res.status(500).json({message: "Error. Please try again."});
        }

        if(!foundUserConnections.length) {
            return res.status(200).json({message: "No Games Found in database."});
        }

        res.status(200).json({UserConnection: foundUserConnections});
    });
};


const show = (req, res) => {
    db.UserConnection.findById(req.params.id, (err, foundUserConnection) => {
      if (err) console.log("Error in UserConnections#show:", err);
  
      if (!foundUserConnection) {
        return res
          .status(200)
          .json({ message: "UserConnection with provided ID is not found." });
      }
  
      res.status(200).json({ UserConnection: foundUserConnection });
    });
  };
  
  const create = (req, res) => {
    db.UserConnection.create(req.body, (err, savedUserConnection) => {
      if (err) console.log("Error in UserConnections#create:", err);
  
      res.status(201).json({ UserConnection: savedUserConnection });
    });
  };
  
  const update = (req, res) => {
    db.UserConnection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedUserConnection) => {
        if (err) console.log("Error in UserConnections#update:", err);
  
        if (!updatedUserConnection) {
          return res.status(200).json({
            message: "UserConnection with provided ID could not be found for update.",
          });
        }
  
        res.status(200).json({ UserConnection: updatedUserConnection });
      }
    );
  };
  
  const destroy = (req, res) => {
    db.UserConnection.findByIdAndDelete(req.params.id, (err, deletedUserConnection) => {
      if (err) console.log("Error in UserConnections#destroy:", err);
  
      if (!deletedUserConnection) {
        return res.status(200).json({
          message: "UserConnection with provided ID could not be found for delete.",
        });
      }
  
      res.status(200).json({ UserConnection: deletedUserConnection });
    });
  };
  


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};