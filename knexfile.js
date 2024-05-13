// knex migrate:up --knexfile config/db.config.js --env development


export default {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'backend',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
  },


};
