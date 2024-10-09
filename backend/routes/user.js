const router  = require('express').Router();
const User = require('../models/users');
router.post('/sign-in', async(req, res)=>{
    try{
        const {username} = req.body;
    const {email} = req.body;
    const existingUSer =  await User.findOne({username});
    const existingEmail =  await User.findOne({email});
    if (existingUSer) {
        return res.status(400).json({
            message: 'username already exist'
        });
    }
    else if(username.length <3){
        return res.status(400).json({
            message: 'username atleast 4 characters'
        });
    }
    if (existingEmail) {
        return res.status(400).json({
            message: 'email already exist'
        });
    }

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
});

await newUser.save();
return resstatus(200).json({message: 'sign in sussessfully'});
    } catch(err){
        console.log("error");
        res.status(400).json({
            message: 'internal server error'
        });
    }

});
module.exports = router;