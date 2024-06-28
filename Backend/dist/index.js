"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = exports.DI = void 0;
const express_1 = __importDefault(require("express"));
const core_1 = require("@mikro-orm/core");
const Dog_1 = require("./entities/Dog");
const dog_controller_1 = require("./controller/dog.controller");
const Port = 4000;
const app = (0, express_1.default)();
exports.DI = {};
const startServer = async () => {
    exports.DI.orm = await core_1.MikroORM.init();
    exports.DI.em = exports.DI.orm.em;
    exports.DI.dogRepository = exports.DI.orm.em.getRepository(Dog_1.Dog);
    app.use((req, res, next) => {
        console.info('New request to ${req.path}');
        next();
    });
    app.use(express_1.default.json());
    app.use((req, res, next) => { core_1.RequestContext.create(exports.DI.orm.em, next); });
    app.use('/dog', dog_controller_1.DogController);
    app.listen(Port, () => {
        console.log(`Server started on http://localhost:${Port}`);
    });
};
exports.startServer = startServer;
(0, exports.startServer)();
