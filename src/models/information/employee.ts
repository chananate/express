import * as Knex from 'knex';

export class Employee {

  getAllEmployee(db: Knex) {
    return db('employee_information');
  }

  getEmployee(db: Knex,perId:string) {
    return db('employee_information')
    .where('employee_personalId',perId);
  }

  insertEmployee(db: Knex, 
    //data
    employee_personalId :number,
    employee_type: string,
    employee_position:string,
    employee_title:string,
    employee_name:string,
    employee_surname:string,
    employee_bd:Date,
    employee_address:string,
    employee_religion:string
    ) {
    return db('employee_information')
    //.insert(data)
    .insert({employee_personalId,employee_type,employee_position,
      employee_title,employee_name,employee_surname,
      employee_bd,employee_address,employee_religion});
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