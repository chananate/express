import {Employee} from '../../models/information/employee';
/// <reference path="../../../typings.d.ts" />

import * as express from 'express';
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import * as crypto from 'crypto';


import { Jwt } from '../../models/jwt';

const employeeModel = new Employee();
const jwt = new Jwt();

const router: Router = Router();

router.get('/employee-info', async (req: Request, res: Response) => {
  let db = req.db;
  try {
      const result = await employeeModel.getEmployee(db);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }

});

router.get('/employee-insert', async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
  try {
      const result = await employeeModel.insertEmployee(db,data);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }

});

export default router;