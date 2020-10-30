const db = require("../models");


const index = (req, res) => {
    console.log("backend userConnection controller @ index")
    db.UserConnection.find({}, (err, foundUserConnections) => {
        if (err) {
            console.log("Error in user connection index:", err);
            return res.status(500).json({message: "Error. Please try again."});
        }

        if(!foundUserConnections.length) {
            return res.status(200).json({message: "No UserConnections Found in database."});
        }

        res.status(200).json({"connections": foundUserConnections});
    });
};


const show = (req, res) => {
    db.UserConnection.findById(req.params.id, (err, foundUserConnection) => {
      if (err) console.log("Error in UserConnection #show:", err);
  
      if (!foundUserConnection) {
        return res
          .status(200)
          .json({ message: "UserConnection with provided ID is not found." });
      }
  
      res.status(200).json({ "connection": foundUserConnection });
    });
  };
  

  const create = (req, res) => {
    const userId = req.userId
    console.log(userId)
    db.UserConnection.create(req.body, (err, savedUserConnection) => {
      if (err) console.log("Error in UserConnection #create:", err);
      db.User.findById(userId, (err, foundUser) => {
        if (err) console.log("Error in UserConnection @ create for find USER :", err);
        foundUser.connections.push(savedUserConnection);
        foundUser.save()
        res.status(201).json({ "connection": savedUserConnection });
      })
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
        
        res.status(200).json({ "connection": updatedUserConnection });
    });
  };
  
  const destroy = (req, res) => {
    db.UserConnection.findByIdAndDelete(req.params.id, (err, deletedUserConnection) => {
      if (err) console.log("Error in UserConnections#destroy:", err);
  
      if (!deletedUserConnection) {
        return res.status(200).json({
          message: "UserConnection with provided ID could not be found for delete.",
        });
      }
  
      res.status(200).json({ "connection": deletedUserConnection });
    });
  };
  


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};