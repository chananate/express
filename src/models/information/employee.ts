import * as Knex from 'knex';

export class Employee {

  getAllEmployee(db: Knex) {
    return db('employee_information');
  }

  getEmployee(db: Knex,perId:string) {
    return db('employee_information')
    .where('employee_personalId',perId);
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

  updateEmpTel(db:Knex,id:string,tel:string){
    return db('employee_information')
      .update(id)
      .where("employee_tel",tel);
  }

  delEmployee(db: Knex,id:string){
    return db('employee_information')
    .del()
    .where('employee_personalId',id);
  }

}