import * as Knex from 'knex';

export class Patient {
  getPatient(db: Knex) {
    return db('patient_information');
  }

}