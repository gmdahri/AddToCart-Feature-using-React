const student = require("../../dao/student");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable("student", table=>{
    table.increments('sid');
    table.string("first_name", 255).notNullable();
    table.string("last_name",255).notNullable();
    table.timestamps(true,true);
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable("student")
  .dropTable("books")
};
