"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = require("./entities/Dog");
const options = {
    type: 'postgresql',
    entities: [Dog_1.Dog],
    dbName: 'diaryDB',
    password: 'fweSS22',
    user: 'diaryDBUser',
    debug: true,
};
exports.default = options;
