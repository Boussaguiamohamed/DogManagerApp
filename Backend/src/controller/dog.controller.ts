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
        const { name, age } = req.body; // Get the name and age from the request body

        const createDog: CreateDog ={
            name: name,
            age: age
        }
        // Create a new dog object
        const newDog = new Dog(createDog.name, createDog.age);

        await DI.em.persistAndFlush(newDog); // Persist the new dog to the database

        res.status(201).json(newDog); // Respond with the newly created dog
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
});

export const DogController = router;
