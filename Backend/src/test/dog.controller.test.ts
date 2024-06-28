import request  from "supertest";
import { DogController } from "../controller/dog.controller";

describe('DogController', () => {
    // Test GET /dogs route
    it('GET /dogs should get all dogs', async () => {
        const response = await request(DogController).get('/');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(2); // Assuming there are two dogs in the mock repository
    }, 10000); // 10 seconds timeout
    

    // Test POST /dogs route
    it('POST /dogs should create a new dog', async () => {
        const newDog = { name: 'Buddy', age: 3 };

        const response = await request(DogController).post('/').send(newDog);

        console.log(response.status); // Debug log
        console.log(response.body); // Debug log

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('name', 'Buddy');
        expect(response.body).toHaveProperty('age', 3);
        expect(response.body).toHaveProperty('id', 3); // Mocked ID returned from persistAndFlush
    });
});