const _ = require("lodash")
const CartSchema = require("../models/CartShema")


const createCartItem = async (req, res) => {
    const { price, product } = _.pick(req.body, ["price", "product"]);
    const userId = req.user._id

    const cartItemFind = await CartSchema.findOne({
        user: userId,
        product : product
    })

    if (cartItemFind) return res.status(400).send("Product Already Added")

    const newCartItem = new CartSchema({
      user: userId,
      price: price,
      product: product,
    });
    
    const data = await newCartItem.save()
  return  res.status(2001).send({
        message: "Product Add in Cart successfully",
        data : data
    })
    

}

const getCartItem = async (req, res) => {
    const userId = req.user._id;
    
    const cartItem = await CartSchema.find({ user: userId })
        .populate("user", "name")
        .populate("product", "name")
    
   return res.status(200).send(cartItem);
    
}


const updateCartItem = async (req, res) => {
    const { _id, count } = _.pick(req.body, ["_id", "count"])
    const userId = req.user._id

    const updatedata = await CartSchema.updateOne({
        _id: _id,
        user : userId
    }, { count: count },{new : true})
    
    return res.status(200).send({
        message: "Item Updated",
        data : updatedata
    })

    
    
}


const deleteCartItem = async (req, res) => {
    const _id = req.params.id
    const userId = req.user._id

    const deleteItem = await CartSchema.deleteOne({ _id: _id, user: userId })
    return res.status(200).send("Delete Successfull..")

    
}


module.exports = {createCartItem,getCartItem,updateCartItem,deleteCartItem}