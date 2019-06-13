import * as Knex from 'knex';

export class Employee {
  getEmployee(db: Knex) {
    return db('employee_information');
  }

}