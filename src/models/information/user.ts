import * as Knex from 'knex';

export class User {

  getAllUser(db: Knex) {
    return db('user');
  }

  checkType(db: Knex,tel:string){
    return db('user')
    .select('type')
    .where('tel',tel);
  }

  getUserWithEmpInfo(db:Knex,tel:string){
    return db('user')
    .leftJoin('employee_information','user.tel','employee_information.employee_tel')
    .select('user.username','user.password','user.type',
    'employee_information.employee_personalId','employee_information.employee_type',
    'employee_information.employee_position','employee_information.employee_title',
    'employee_information.employee_name','employee_information.employee_surname',
    'employee_information.employee_bd','employee_information.employee_address',
    'employee_information.employee_religion','employee_information.employee_tel')
    .where("user.tel",tel)
  }

  getUserWithPatInfo(db:Knex,tel:string){
    return db('user')
    .leftJoin('patient_information','user.tel','patient_information.patient_tel')
    .select('user.username','user.password','user.type',
    'patient_information.patient_personalId','patient_information.patient_title',
    'patient_information.patient_name','patient_information.patient_surname',
    'patient_information.patient_bd','patient_information.patient_address',
    'patient_information.patient_religion','patient_information.patient_tel')
    .where("user.tel",tel)
  }

  postUser(db: Knex,username:string) {
    return db('user')
    .where("username", username);
  }

  insertUser(db: Knex,
    // data,
    username:string,
    password:string,
    tel:string,
    type:string
    ) {
    return db('user')
    .insert(
      {
        username,password,tel,type
      }
    );
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