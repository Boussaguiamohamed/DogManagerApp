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
        const dogs = req.body; // Get the array of dogs from the request body
        // Validate that the request body is an array
        if (!Array.isArray(dogs)) {
            return res.status(400).json({ message: "Expected an array of dogs" });
        }
        const newDogs = dogs.map(dog => new Dog_1.Dog(dog.name, dog.age));
        await __1.DI.em.persistAndFlush(newDogs); // Persist the new dogs to the database
        res.status(201).json(newDogs); // Respond with the newly created dogs
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// DELETE /dogs - Delete all dogs
router.delete("/", async (req, res) => {
    try {
        await __1.DI.em.getRepository(Dog_1.Dog).nativeDelete({}); // Remove all dogs from the database
        res.status(200).json({ message: "All dogs deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.DogController = router;
