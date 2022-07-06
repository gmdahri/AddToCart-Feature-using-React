// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

 

  development: {
    client: 'postgresql',
    connection: {
      // host:"127.0.0.1",
      database: 'TestDB',
      user: 'postgres',
      password: "123"
      
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

 

};
