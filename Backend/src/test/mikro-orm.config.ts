import { Options } from '@mikro-orm/core';
import { Dog } from '../entities/Dog';


const options: Options = {
  type: 'postgresql',
  entities: [Dog],
  dbName: 'diaryDB',
  password: 'fweSS22',
  user: 'diaryDBUser',
  debug: true,
};

export default options;
