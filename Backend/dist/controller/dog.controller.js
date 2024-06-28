"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogController = void 0;
const express_1 = require("express");
const Dog_1 = require("../entities/Dog");
const __1 = require("..");
const router = (0, express_1.Router)({ mergeParams: true });
// Sample data to simulate a database
// GET /dogs - Get all dogs
router.get("/", async (req, res) => {
    try {
        const dogs = await __1.DI.em.getRepository(Dog_1.Dog).findAll(); // Get all dogs from the database
        res.status(200).send(dogs); // Respond with the dogs
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// POST /dogs - Create a new dog
router.post("/", async (req, res) => {
    try {
        const { name, age } = req.body; // Get the name and age from the request body
        const createDog = {
            name: name,
            age: age
        };
        // Create a new dog object
        const newDog = new Dog_1.Dog(createDog.name, createDog.age);
        await __1.DI.em.persistAndFlush(newDog); // Persist the new dog to the database
        res.status(201).json(newDog); // Respond with the newly created dog
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.DogController = router;
