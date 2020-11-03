const db = require("../models");


const index = (req, res) => {
    console.log("backend Connection controller @ index")
    db.Connection.find({user: req.userId}, (err, foundConnections) => {
        if (err) {
            console.log("Error in user connection index:", err);
            return res.status(500).json({message: "Error. Please try again."});
        }

        if(!foundConnections.length) {
            return res.status(200).json({message: "No Connections Found in database."});
        }

        res.status(200).json({"connections": foundConnections});
    });
};


const show = (req, res) => {
    // db.Connection.findById(req.params.id).populate("user notes").exec((err, foundConnection) => {
    db.Connection.findById(req.params.id).populate("user").exec((err, foundConnection) => {
      if (err) console.log("Error in Connection #show:", err);
  
      if (!foundConnection) {
        return res
          .status(200)
          .json({ message: "Connection with provided ID is not found." });
      }
          // TODO
          // ADONIS I CHANGED 31 from "connection" to "connectionId"
      res.status(200).json({ "connectionId": foundConnection });
    });
  };

  // const show = (req, res) => {
  //   db.Connection.findById(req.params.id, (err, foundConnection) => {
  //     if (err) console.log("Error in Connection #show:", err);
  //     db.User.findById(userId, (err, foundUser) => {
  //       // if (err) console.log("Error in Connection @ USER show for find USER :", err);
  //       if (!foundConnection) {
  //         return res
  //           .status(200)
  //           .json({ message: "Connection with provided ID is not found." });
  //       } 
  //       foundUser.connections.get(foundConnection);
  //       res.status(200).json({ "connection": foundConnection });
  //     })

  //   });
  // };

  const create = (req, res) => {
    const userId = req.userId
    console.log(userId)
    db.Connection.create(req.body, (err, savedConnection) => {
      if (err) console.log("Error in Connection #create:", err);
      db.User.findById(userId, (err, foundUser) => {
        if (err) console.log("Error in Connection @ create for find USER :", err);
        foundUser.connections.push(savedConnection);
        foundUser.save()
        res.status(201).json({ "connection": savedConnection });
      })
    });
  };
  

  const update = (req, res) => {
    db.Connection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedConnection) => {
        if (err) console.log("Error in Connections#update:", err);
  
        if (!updatedConnection) {
          return res.status(200).json({
            message: "Connection with provided ID could not be found for update.",
          });
        }
        
        res.status(200).json({ "connectionId": updatedConnection });
    });
  };
  
  
  const destroy = (req, res) => {
    db.Connection.findByIdAndDelete(req.params.id, (err, deletedConnection) => {
      if (err) console.log("Error in Connections#destroy:", err);
  
      if (!deletedConnection) {
        return res.status(200).json({
          message: "Connection with provided ID could not be found for delete.",
        });
      }
  
      res.status(200).json({ "connection": deletedConnection });
    });
  };
  


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};