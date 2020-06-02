import Knex from 'knex';

// Cria a tabela
export async function up(knex: Knex) {
  return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();

    table.integer('point_id')
      .notNullable()
      .references('id')
      .inTable('points');

    table.integer('items_id')
      .notNullable()
      .references('id')
      .inTable('items');
  });
}

// Volta atrás (deleta a tabela)
export async function down(knex: Knex) {
  return knex.schema.dropSchema('items');
}