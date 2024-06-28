import { BaseEntity } from "./BaseEntity";
export declare class Dog extends BaseEntity {
    name: string;
    age: number;
    constructor(name: string, age: number);
}
export type CreateDog = {
    name: string;
    age: number;
};
