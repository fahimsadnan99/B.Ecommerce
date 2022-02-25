const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const _ = require("lodash")

const signup = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) return res.status(400).send("Fill all Fields")
 
    let User = await UserSchema.findOne({ email: email })
   
    if (User) return res.status(400).send("User Already Exist")
    
  User = new UserSchema(_.pick(req.body, ["name", "email", 'password']))
    const Token = await User.generateJWT()

    User.password = await bcrypt.hash(password, 10);
    
    await User.save()
    return res.status(201).send({
      message: "User Create Successfully",
      Token: Token,
      User: _.pick(User, ["name", "email"]),
    });
};




const signin = async (req, res) => {
    
    const AuthUser = await UserSchema.findOne({ email: req.body.email })
    if (!AuthUser) return res.status(400).send("User Not Exist")
    
    const PassComp = await bcrypt.compare(req.body.password, AuthUser.password);
    if (!PassComp) return res.status(400).send("Email OR Password Wrong..");
  const Token = await AuthUser.generateJWT();
    res.status(200).send({
      message: "Login Successfully",
      Token: Token,
      User: _.pick(AuthUser, ["_id", "name", "email", "role"]),
    });
}

module.exports = {signin,signup}