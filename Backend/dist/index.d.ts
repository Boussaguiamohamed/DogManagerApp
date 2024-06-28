import http from 'http';
import { EntityManager, EntityRepository, MikroORM } from '@mikro-orm/core';
import { Dog } from './entities/Dog';
export declare const DI: {
    server: http.Server;
    orm: MikroORM;
    em: EntityManager;
    dogRepository: EntityRepository<Dog>;
};
export declare const startServer: () => Promise<void>;
