const CatagorySchema = require("../models/Catagory")
const _ = require("lodash")

const createCatagory = async (req, res) => {
    const catagory = new CatagorySchema(_.pick(req.body, ["catagory"]))

    try {
         await catagory.save()

    res.status(201).send({
        message: "Catagory Create successful",
        Catagory : catagory
        
    })
    } catch (err) {
    return res.status(500).send("Catagory Already Exist")
    }
   
    
}



const getCatagory = async (req, res) => {
    const findCatagory = await CatagorySchema.find().sort({catagory : 1})
    res.status(200).send(findCatagory)
}

module.exports = {createCatagory,getCatagory}