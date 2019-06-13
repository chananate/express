import * as Knex from 'knex';
const tableName = 'lib_prefix';

export class LibPrefixModel {
  getPrefix(db: Knex) {
    return db(tableName)
    .leftJoin('lib_clinic',tableName+'.dep','lib_clinic.code')
    .select('prefix','dep','lib_clinic.clinic as name');
    //.select('*');
  }

  insertPrefix(db: Knex, prefix: string, dep: number) {
    return db(tableName)
      .insert({ prefix, dep });
  }

  updatePrefix(db: Knex, prefix: string, dep: number) {
    return db(tableName)
      .update({ dep })
      .where("prefix", prefix);
  }

  deletePrefix(db: Knex, prefix: string) {
    return db(tableName)
      .del()
      .where({ prefix });
  }

  searchPrefix(db: Knex, columnName: string, searchValue: string) {
    return db(tableName)
      .where(columnName, "like", "%" + searchValue + "%");
  }
}