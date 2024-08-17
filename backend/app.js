import { log } from "console";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes.js"; // new

const port=5000;

mongoose
  .connect("mongodb://localhost:27017/local", { })
  .then(async (db_res) => {

    console.log("mongo connection is ok.");

    const app=express();
    app.use("/", routes);

    // app.get("/", async (req, res) => {
    //     const data = await myCollection.find();
    //     res.send(data);
    // });

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

});
