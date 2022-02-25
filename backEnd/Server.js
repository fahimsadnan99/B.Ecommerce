const app = require("./App")
const mongoose = require("mongoose")


const PORT = process.env.PORT
const DB = process.env.DATABASE

app.listen(PORT, () => console.log("Server Is Running On PORT " + PORT))

mongoose.connect(DB, { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connection Successfull"))
.catch(()=> console.log("Database Connection faild"))