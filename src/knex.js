
import Knex from 'knex';

const knex = Knex({
  client: 'mysql2', 
  connection: {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'backend',
  },
});

export default knex;
