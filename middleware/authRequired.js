const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    console.log(req.headers)
    // add jwt validation
    if (req.headers["authorization"]) {
        const token = req.headers["authorization"].split(" ")[1];
        const payload = await jwt.verify(token, "supersecretwaffels");
        req.userId = payload._id;
        next();
    } else {
        res.sendStatus(403);
    }
};