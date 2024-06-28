import { Entity,Property } from "@mikro-orm/core";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Dog extends BaseEntity {
    @Property()
    name: string;

    @Property()
    age: number;

    constructor(name: string, age: number) {
        super();
        this.name = name;
        this.age = age;
    }
}

export type CreateDog = {
    name: string;
    age: number;
}