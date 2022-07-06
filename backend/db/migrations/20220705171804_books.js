/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable("books", table=>{
        table.increments('id');
        table.string("book_name", 255).notNullable();
        table.string("author",255).notNullable();
        table.integer("borrowed_by").notNullable().references("student.sid").onDelete("CASCADE");
        table.dateTime("date_of_borrow",255).notNullable();
        table.dateTime("date_of_return",255).notNullable();
    
        table.timestamps(true,true);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("books")
};
