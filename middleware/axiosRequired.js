// const jwt = require("jsonwebtoken");
import axios from "axios";


module.exports = async (request, response, next) => {
    const options = {
        method: 'GET',
        url: 'https://rapidapi.p.rapidapi.com/odm-organizations',
        headers: {
            'x-rapidapi-key': '7a73bcf8f9msh68192c2cb979b08p131cadjsnf3122ff2e4bb',
            'x-rapidapi-host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
        }
    };

    if (request.headers["options"]){
        axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });  
        next();
    } else {
        response.sendStatus(403);
    }
};


import axios from "axios";



        // console.log(req.headers)
    // // add jwt validation
    // if (req.headers["authorization"]) {
        // const token = req.headers["authorization"].split(" ")[1];
        // const payload = await jwt.verify(token, "supersecretwaffels");
        // req.userId = payload._id;
        // next();
    // } else {
    //     res.sendStatus(403);
    // }