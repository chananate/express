import * as Knex from 'knex';

export class Employee {

  getAllEmployee(db: Knex) {
    return db('employee_information');
  }

  getEmployee(db: Knex,employee_personalId:string) {
    return db('employee_information')
    .where('employee_personalId',employee_personalId);
  }

  insertEmployee(db: Knex, 
    //data
    employee_personalId :number,
    employee_type: string,
    employee_position:string,
    employee_title:string,
    employee_name:string,
    employee_surname:string,
    employee_bd:any,
    employee_address:string,
    employee_religion:string,
    employee_tel:string
    ) {
    return db('employee_information')
    //.insert(data)
    .insert(
      {employee_personalId,employee_type,employee_position,
      employee_title,employee_name,employee_surname,
      employee_bd,employee_address,employee_religion,employee_tel}
      );
  }

  updateEmployee(db: Knex,data,employee_personalId: string) {
    return db('employee_information')
      .update({ data })
      .where("employee_personalId", employee_personalId);
  }

  delEmployee(db: Knex,employee_personalId:string){
    return db('employee_information')
    .del()
    .where('employee_personalId',employee_personalId);
  }

}