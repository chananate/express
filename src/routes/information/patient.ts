import { Patient } from './../../models/information/patient';
/// <reference path="../../../typings.d.ts" />

import * as express from 'express';
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import * as crypto from 'crypto';


import { Jwt } from '../../models/jwt';

const patientModel = new Patient();
const jwt = new Jwt();

const router: Router = Router();

router.get('/patient-info', async (req: Request, res: Response) => {
  let db = req.db;
  try {
      const result = await patientModel.getPatient(db);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }

});

export default router;