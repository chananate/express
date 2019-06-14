import * as Knex from 'knex';

export class Patient {

  getAllPatient(db: Knex) {
    return db('patient_information');
  }

  getPatient(db: Knex,patientId:string) {
    return db('patient_information')
    .where('patient_personalId',patientId);
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
}