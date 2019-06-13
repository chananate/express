import * as Knex from 'knex';

export class User {

  getUser(db: Knex) {
    return db('user');
  }

  insertUser(db: Knex,data) {
    return db('user')
    .insert(data);
  }

  updateEmployee(db: Knex,data,username: string) {
    return db('user')
      .update({ data })
      .where("username", username);
}
}