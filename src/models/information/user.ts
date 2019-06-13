import * as Knex from 'knex';

export class User {

  getUser(db: Knex) {
    return db('user');
  }
  
  postUserWh(db: Knex,username:string) {
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