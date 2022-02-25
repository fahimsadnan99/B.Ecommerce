const express = require("express")
const { getProfile, setProfile } = require("../Controlers/ProfileController")
const authorizationUser = require("../Middlewares/Authorization")




const Routers = express.Router()

Routers.route("/")
    .get(authorizationUser,getProfile)
    .post(authorizationUser, setProfile)
    

    module.exports = Routers