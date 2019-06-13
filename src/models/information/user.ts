import * as Knex from 'knex';

export class User {

  getAllUser(db: Knex) {
    return db('user');
  }

  postUser(db: Knex,username:string) {
    return db('user')
    .where("username", username);
  }

  insertUser(db: Knex,data) {
    return db('user')
    .insert(data);
  }

  updateUser(db: Knex,data,username:string) {
    return db('user')
      .update({ data })
      .where("username", username);
  }

  deleteUser(db: Knex, username: string) {
    return db('user')
    .where({username});
  }
}