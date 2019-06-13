import {Employee} from '../../models/information/employee';
/// <reference path="../../../typings.d.ts" />

import * as express from 'express';
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import * as crypto from 'crypto';


import { Jwt } from '../../models/jwt';
import { appendFile } from 'fs';

const employeeModel = new Employee();
const jwt = new Jwt();

const router: Router = Router();

router.get('/employee-all', async (req: Request, res: Response) => {
  let db = req.db;
  try {
      const result = await employeeModel.getAllEmployee(db);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }

});

router.post('/employee-info', async (req: Request, res: Response) => {
  let db = req.db;
  const perId = req.body.perId;
  try {
      const result = await employeeModel.getEmployee(db,perId);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }

});

router.post('/employee-insert', async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
  const employee_personalId = req.body.employee_personalId;
  const employee_position = req.body.employee_position;
  const employee_type = req.body.employee_type;
  const employee_title = req.body.employee_title;
  const employee_name = req.body.employee_name;
  const employee_surname = req.body.employee_surname;
  const employee_bd = req.body.employee_bd;
  const employee_address = req.body.employee_address;
  const employee_religion = req.body.employee_religion;
  const employee_tel = req.body.employee_tel;
  try {
      const result = await employeeModel
      //.insertEmployee(db,data);
      .insertEmployee(db,
        employee_personalId,employee_position,employee_type,employee_title,
        employee_name,employee_surname,employee_bd,employee_address,employee_religion,employee_tel);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }
});

router.post('/employee-update', async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
  const employee_personalId = req.body.employee_personalId;
  try {
      const result = await employeeModel.updateEmployee(db,data,employee_personalId);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }
});

// router.post('/employee-update-tel', async (req: Request, res: Response) => {
//   let db = req.db;
//   const id = req.body.id;
//   const tel = req.body.tel;
//   try {
//       const result = await employeeModel.updateEmpTel(db,id,tel);
//       res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
//   } catch (error) {
//       console.log(error.message);
//       res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
//   }
// });

router.post('/employee-del', async (req: Request, res: Response) => {
  let db = req.db;
  const id = req.body.id;
  try {
      const result = await employeeModel.delEmployee(db,id);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }
});


export default router;