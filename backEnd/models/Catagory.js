const mongoose = require("mongoose")

const CatagorySchema = mongoose.Schema({
    catagory: {
        type: String,
        unique : true
    }
})

module.exports = mongoose.model("Catagory",CatagorySchema)