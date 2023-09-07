const express = require('express');
const app = express();
const products = require("./data/products")
var cors = require('cors')
const dotenv = require("dotenv")
const PORT = 8000;
const connectDB = require("./config/config");
const productRoutes = require('./routes/productsRoutes')
const {errorHandler} = require("./middlewares/errorMiddleware")

// dotenv config
dotenv.config();
app.use(cors())
// conncetion to mongodb database
connectDB();

app.use("/api",productRoutes);
app.use(errorHandler);


app.get('/',(req,res)=>{
    res.send("welcome to Node server")
})




app.listen(process.env.PORT || PORT,()=>{
    console.log(`server running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`)
});