const express = require("express")
const { createCartItem, getCartItem, updateCartItem, deleteCartItem } = require("../Controlers/CartController");
const authorizationUser = require("../Middlewares/Authorization");




const Routers = express.Router()
Routers.route("/")
    .get(authorizationUser,getCartItem)
    .post(authorizationUser,createCartItem)
    .put(authorizationUser,updateCartItem);

Routers.route("/:id")
    .delete(authorizationUser, deleteCartItem)
  

    module.exports = Routers