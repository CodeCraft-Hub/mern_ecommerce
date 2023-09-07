const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Users = require("./data/Users");
const User = require("./models/User");
const Product = require("./models/Productmodel");
const Order = require("./models/OrderModel");
const products = require("./data/products");
const connectDB = require("./config/config");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(Users);
    const adminUser = createUser[0]._id;
    const sampleData = products.map((product) => {
      return { ...product, User: adminUser };
    });
    await Product.insertMany(sampleData);
    console.log("data impmorted");
    process.exit();
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1); // 1 for failure
  }
};

const dataDestory = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log('Data Destory')
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);

  }
};

if (process.argv[2] === "-d") {
  dataDestory();
} else {
  importData();
}
