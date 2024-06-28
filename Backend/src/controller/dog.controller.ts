import { Router } from "express";
import { CreateDog, Dog } from "../entities/Dog";
import { DI } from "..";

const router = Router({ mergeParams: true });

// Sample data to simulate a database


// GET /dogs - Get all dogs
router.get("/", async (req, res) => {
    try {
        const dogs = await DI.em.getRepository(Dog).findAll(); // Get all dogs from the database
        res.status(200).send(dogs); // Respond with the dogs
        
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
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

        const newDogs = dogs.map(dog => new Dog(dog.name, dog.age));

        await DI.em.persistAndFlush(newDogs); // Persist the new dogs to the database

        res.status(201).json(newDogs); // Respond with the newly created dogs
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
});
// DELETE /dogs - Delete all dogs
router.delete("/", async (req, res) => {
    try {
        await DI.em.getRepository(Dog).nativeDelete({}); // Remove all dogs from the database
        res.status(200).json({ message: "All dogs deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

export const DogController = router;
