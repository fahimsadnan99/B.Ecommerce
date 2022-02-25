const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [5, "Minimum 5 letter Name"],
    maxlength: [200, "Maximum 200 letter Name"],
  },
  description: {
    type: String,
    maxlength: [2000, "Maximum 2000 letter Name"],
    },
    price: Number,
    quantity: Number,
    catagory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Catagory',
        required : true
    },
    photo: {
      type: String,
      required : true
    }
},{timestamps : true});

module.exports = mongoose.model("Product",ProductSchema)