import * as Knex from 'knex';

export class Patient {

  getAllPatient(db: Knex) {
    return db('patient_information');
  }

  getPatient(db: Knex,patientId:string) {
    return db('patient_information')
    .where('patient_personalId',patientId);
  }
  
  insertPatient(db: Knex, 
    patient_personalId :number,
    patient_title:string,
    patient_name:string,
    patient_surname:string,
    patient_bd:Date,
    patient_address:string,
    patient_religion:string,
    patient_tel:string) 
    {return db('patient_information')
    .insert(
      {patient_personalId,
        patient_title,patient_name,patient_surname,
        patient_bd,patient_address,patient_religion,patient_tel}
    );
  }

  updatePatient(db: Knex,data,patient_personalId: string) {
    return db('patient_information')
      .update({ data })
      .where("patient_personalId", patient_personalId);
  }

  updatePatTel(db:Knex,patient_personalId:string,patient_tel:string){
    return db('patient_information')
      .update(patient_personalId)
      .where("patient_tel",patient_tel);
  }

  delPatient(db: Knex,patient_personalId:string){
    return db('patient_information')
    .del()
    .where('patient_personalId',patient_personalId);
  }

}