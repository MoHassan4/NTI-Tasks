import mongoose from "mongoose";

export const connection = mongoose.connect("mongodb+srv://ecomDB:ecomDB123@cluster0.3lmne5y.mongodb.net/EcommerceDB?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  console.log("db connected");
}).catch((err) => {
  console.log(err);
})
