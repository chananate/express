import * as Knex from 'knex';

export class Employee {

  getEmployee(db: Knex) {
    return db('employee_information');
  }

  insertEmployee(db: Knex,data) {
    return db('employee_information')
    .insert(data);
  }

  updateEmployee(db: Knex,data,id: string) {
    return db('employee_information')
      .update({ data })
      .where("employee_personalId", id);
}
}