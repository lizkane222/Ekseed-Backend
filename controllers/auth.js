bcrypt = require("bcryptjs");
const db = require("../models");
const jwt = require("jsonwebtoken");

// REGISTER ROUTE (POST)
const register = async (req,res) => {
    try{
        const foundUser = await db.User.findOne({ email: req.body.email });

        if (foundUser) {
            return res.send({ message: "Email address has already been registered. Please try again",});
        }

        const salt = await bcrypt.genSalt(10);
        // takes each character and turns it into multiple random characters
        const hash = await bcrypt.hash(req.body.password, salt);
        // create user with req.body and hashed password
        const createdUser = await db.User.create({...req.body, password: hash});

        return res
            .status(201)
            .json({ status: 201, message: "success", createdUser});
    } catch(err) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again.",
        });
    }
};

// LOGIN ROUTE (POST)
const login = async (req,res) => {
    try {
        const foundUser = await (await db.User.findOne({ email: req.body.email })).isSelected(
            "+password"
        );
        // console.log(foundUser);

        if(!foundUser) {
            return res
            .status(400)
            .json({ staus: 400, message: "Email or Password incorrect"});
        }

        const isMatch = await bcrypt.compare(req.body.password, foundUser.password);

        // check if the passwords match
        if (isMatch) {
            // create a json web token and send response
            // .sign(payload, secretkey, options)
            const signedJwt = await jwt.sign(
                {_id: foundUser._id},
                "supersecretwaffels",
                {expiresIn: "8h",}
            )
            res.status(200).json({
                status: 200,
                message: "Success",
                token: signedJwt,
            })

        } else {
            // the password provided does not match the password on file
            return res.status(400).json({
                status: 400,
                message: "Username or Password is Incorrect"
            });
        }

        // const isMatch = await bcrypt.compare(req.body.password, foundUser.password);

        // if (isMatch) {
        //     // create a json web token
        //     const signedJwt = await jwt.sign(
        //         {
        //             // take id of the found user and add in teh id ot the jwt payload
        //             _id: foundUser._id,
        //         },
        //             // secret to sign the jwt with 
        //             "super_secret_key",
        //         {
        //             // it's good practice to have an expiration amount of jwt tokens.
        //             expiresIn: '8h',
        //         }
        //     );

        //     return res.status(200).json({
        //         status: 200,
        //         message: "Success",
        //         id: foundUser._id,
        //         signedJwt,
        //     });
        //     // the password provided does not match the password on file
        // } else {
        //     return res.status(400).json({
        //         status: 400,
        //         message: "Username or password is incorrect",
        //     });
        // }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status:500,
            message: "Something went wrong. Please try again",
        });
    }
};

const profile = async (req, res) => {
    try{
        const foundUser = await db.User.findById(req.currentUser);
        res.json({headers: req.headers, user: foundUser});
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again",
        });
    }
};

// POST LOGOUT ROUTE
// const logout = (req,res) => {
    // logout functionality not needed. We just remove the JWT on the front end.
// };

module.exports = {
    register,
    login,
    profile,
};