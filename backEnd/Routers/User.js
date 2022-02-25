const express = require("express")
const {signin,signup} = require("../Controlers/UserControlers")

const Routers = express.Router()

Routers.route("/signup")
    .post(signup)
Routers.route("/signin")
    .post(signin)


    module.exports = Routers