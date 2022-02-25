const mongoose = require("mongoose")


const ProfileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref : "User"
    },
    phone: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    postCode: Number,
    country : String
}, { timestamps: true })

module.exports = mongoose.model("Profile", ProfileSchema)