const express = require("express")
const AuthAdmin = require("../Middlewares/Admin")
const authorizationUser = require("../Middlewares/Authorization")
const {createCatagory,getCatagory} = require("../Controlers/catagoryController")


const Routers = express.Router()

Routers.route("/")
    .get(getCatagory)
    .post(authorizationUser, AuthAdmin, createCatagory)

    module.exports = Routers