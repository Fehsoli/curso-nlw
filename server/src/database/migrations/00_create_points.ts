import { Knex } from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

    })
}

export async function down(knex: Knex){
    // Voltar atrás (Deletar a tabela) = Desfaz as ações realizadas na função up.
    return knex.schema.dropTable('point')
}