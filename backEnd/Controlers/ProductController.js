const ProductSchema = require("../models/ProductSchema");

const getProduct = async (req, res) => {
  console.log(req.query);
  let order = req.query.order === "desc" ? -1 : 1;
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 10;

  const findProduct = await ProductSchema.find().populate(
    "catagory",
    "catagory"
  )
    .sort({ [sortBy] : order })
    .limit(limit)

  res.status(200).send(findProduct);
};

const createProduct = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const img = url + "/upload/" + req.file.filename;

  const newProduct = new ProductSchema({ ...req.body, photo: img });

  await newProduct.save();
  res.status(201).send({
    message: "Product Create successfully",
    data: newProduct,
  });
};

const getProductById = async (req, res) => {
  const _id = req.params.id;

  const findsProductById = await ProductSchema.findById({ _id }).populate(
    "catagory",
    "catagory"
  );
  res.status(200).send(findsProductById);
};

const updateProductById = async (req, res) => {
  const _id = req.params.id;

  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    const img = url + "/upload/" + req.file.filename;
    if (img) {
      const findsProductById = await ProductSchema.findByIdAndUpdate(
        { _id },
        { ...req.body, photo: img },
        { new: true }
      );
      res.status(200).send({
        data: findsProductById,
      });
    }
  } else {
    const findsProductById = await ProductSchema.findByIdAndUpdate(
      { _id },
      { ...req.body },
      { new: true }
    );
    res.status(200).send({
      data: findsProductById,
    });
  }
};


const filterProducts = async (req, res) => {
  const order = req.body.order === 'desc' ? -1 : 1
  const sortBy = req.body.sortBy ? req.body.sortBy : '_id'
  const limit = req.body.limit ? parseInt(req.body.limit) : 10
  const filters = req.body.filters
  // {
  //   price: [1000, 2000],
  //   catagory : ["648fea28ef","feaf5524eaf","feafe4454"]
  // }
  
let arg = {}

  for (let key in filters) {
    if (filters[key].length > 0) {
      if (key === 'price') {
        arg['price'] = {
          $gte: filters['price'][0],
          $lte : filters['price'][1]
        }
        console.log(arg);
      }
      if (key === 'catagory') {
        arg["catagory"] = {
           $in : filters['catagory']
        }
         
      }
      console.log(arg);
    }
  }

  const findTargetProduct = await ProductSchema.find(arg)
    .populate("catagory", "catagory")
    .sort({ [sortBy]: order })
    .limit(limit)
  
  res.status(200).send(findTargetProduct)
}

module.exports = {
  getProduct,
  createProduct,
  getProductById,
  updateProductById,
  filterProducts
};
