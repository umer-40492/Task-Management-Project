const router = require("express").Router();
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/sign-in", async (req, res) => {
  try {
    const { username } = req.body;
    const { email } = req.body;
    const existingUSer = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });
    if (existingUSer) {
      return res.status(400).json({
        message: "username already exist",
      });
    } else if (username.length < 3) {
      return res.status(400).json({
        message: "username atleast 4 characters",
      });
    }
    if (existingEmail) {
      return res.status(400).json({
        message: "email already exist",
      });
    }
    const passwrodBc =  await bcrypt.hash(req.body.password, 10)
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: passwrodBc,
    });

    await newUser.save();
    return res.status(200).json({ message: "sign in sussessfully" });
  } catch (err) {
    console.log("errorjj");
    res.status(400).json({
      message: "internal server error",
    });
  }
});
router.post('/log-in', async(req, res)=>{
  const { username, password } = req.body;
  const existingUSer = await User.findOne({ username });
  if (!existingUSer) {
    return res.status(400).json({
      message: "username not exist",
    });
  }
  bcrypt.compare(password, existingUSer.password, (err, data)=>{
    if(data) {
      const authClaims = [{name: username}, {jti: jwt.sign({}, 'umerDev')}]
      const token = jwt.sign({authClaims}, 'umerDev', {expiresIn: '2d'});
      res.status(200).json({id: existingUSer._id, token: token});
    } else {
      return res.status(400).json({
        message: "invalid username and password",
      });
    }
  })
})
module.exports = router;
