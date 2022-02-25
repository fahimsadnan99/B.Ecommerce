require("express-async-errors")
const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const morgan = require("morgan")
const User = require("./Routers/User")
const Catagory = require("./Routers/catagoryRouter")
const Product = require("./Routers/ProductRouter")
const path = require("path");
const error = require("./Middlewares/errors");
const Cart = require("./Routers/cartRouter")
const Profile = require("./Routers/ProfileRouter")


const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use("/upload", express.static(path.join(__dirname, "image/product")));

app.use("/api/user", User)
app.use("/api/catagory", Catagory);
app.use("/api/product", Product);
app.use("/api/cart", Cart)
app.use("/api/profile", Profile)







app.use(error)


module.exports = app