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

router.get('/getPatient', async (req: Request, res: Response) => {
  let db = req.db;
  try {
      const result = await patientModel.getAllPatient(db);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }

});

router.post('/getPatientInfo', async (req: Request, res: Response) => {
  let db = req.db;
  const Patient_personalId = req.body.Patient_personalId;
  try {
      const result = await patientModel.getPatient(db,Patient_personalId);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }

});

router.get('/patient-insert', async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
  try {
      const result = await patientModel.insertPatient(db,data);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }

});

export default router;