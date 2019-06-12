import * as Knex from 'knex';

export class Login {
  login(db: Knex) {
    return db('official');
  }

}