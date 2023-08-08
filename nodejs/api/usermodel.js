require("../../dbconnection/connection");
const express = require("express");
const route = express.Router();

const userdata = require("../Schema/userSchema");

route.post("/api/v1/login", async(req, res) =>{
    const{email, password} = req.body;
    try{
        const user = await userdata.findOne({email: email}); 
        if (user){
            if (user.password===password){
                return res.status(200).json({message: 'Login Successfull'});
            }else{
                return res.status(400).json({message: "bad request, if don't have an account, please login"});
            }
        }
    }catch(e){
        console.log('Error: '+e);
        return res.status(400).json({ message: 'somthing went wrong' });
    }
});

route.post("/api/v1/registration", async (req, res) => {
    const { name, number, email, password } = req.body;
    try {
        const userExist = await userdata.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ message: 'user already exists, please login' })
        }



        const addUser = new userdata({
            name,
            number,
            email,
            password,
        });

        const Savedata = addUser.save();
        if (Savedata) {
            return res.status(200).json({ message: 'Successfully updated the data in to the database' });
        }
    } catch (e) {
        console.log('Error: ' + e)
        return res.status(400).json({ message: 'somthing went wrong' });
    }
})

module.exports = route