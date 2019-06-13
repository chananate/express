import * as Knex from 'knex';

export class Patient {

  getAllPatient(db: Knex) {
    return db('patient_information');
  }

  getPatient(db: Knex,perId:string) {
    return db('patient_information')
    .where('patient_personalId',perId);
  }

  insertPatient(db: Knex,data) {
    return db('patient_information')
    .insert(data);
  }

  updatePatient(db: Knex,data,id: string) {
    return db('patient_information')
      .update({ data })
      .where("patient_personalId", id);
  }

  updatePatTel(db:Knex,id:string,tel:string){
    return db('patient_information')
      .update(id)
      .where("patient_tel",tel);
  }

  delPatient(db: Knex,id:string){
    return db('patient_information')
    .del()
    .where('patient_personalId',id);
  }

}