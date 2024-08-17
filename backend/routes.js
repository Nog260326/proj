import express from "express";
import myCollection from "./models/myCollection.js"; // new

const router = express.Router();

// hello api
router.get("/", async (req, res) => {
    res.send("Welcome to noga backend (db interface), please use my endpoints by API");
});

// Get all people
router.get("/people", async (req, res) => {
    const data = await myCollection.find();
    console.log("data from db: ", data);
    res.send(data);
});

// Get specific person (by ID)
router.get("/people/:id", async (req, res) => {
    const person = await myCollection.findOne({ id: req.params.id });
    res.send(person);
});

export default router;
