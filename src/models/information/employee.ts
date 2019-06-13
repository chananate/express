import * as Knex from 'knex';

export class Employee {

  getAllEmployee(db: Knex) {
    return db('employee_information');
  }

  getEmployee(db: Knex,perId:string) {
    return db('employee_information')
    .where(perId);
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