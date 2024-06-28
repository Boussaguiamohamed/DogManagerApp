import express from 'express';
import http from 'http';
import {EntityManager, EntityRepository, MikroORM, RequestContext} from '@mikro-orm/core';
import { Dog } from './entities/Dog';
import { DogController } from './controller/dog.controller';


const Port = 4000;
const app = express();

export const DI = {} as {   
    server: http.Server,
    orm: MikroORM,
    em: EntityManager,
    dogRepository: EntityRepository<Dog>
};

export const startServer = async () => {
    DI.orm = await MikroORM.init();
    DI.em = DI.orm.em;
    DI.dogRepository = DI.orm.em.getRepository(Dog);

    app.use((req, res, next) => {
        console.info('New request to ${req.path}');
        next();
    });

    app.use(express.json());
    app.use((req, res, next) => { RequestContext.create(DI.orm.em, next); });
    
    app.use('/dog', DogController);


    app.listen(Port, () => {
        console.log(`Server started on http://localhost:${Port}`);
    });
};

startServer();




