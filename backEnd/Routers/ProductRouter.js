const express = require("express")
const AuthAdmin = require("../Middlewares/Admin")
const authorizationUser = require("../Middlewares/Authorization")
const {
  getProduct,
  createProduct,
  getProductById,
  updateProductById,
  filterProducts,
} = require("../Controlers/ProductController");
const upload = require("../Middlewares/multer")



const Routers = express.Router()

Routers.route("/")
    .get(getProduct)
.post([authorizationUser,AuthAdmin],upload.single("file"),createProduct)

Routers.route("/:id")
  .get(getProductById)
  .put([authorizationUser, AuthAdmin],upload.single("file"), updateProductById);

Routers.route("/filter")
.post(filterProducts)
module.exports = Routers