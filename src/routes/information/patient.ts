import { Patient } from '../../models/information/patient';
/// <reference path="../../../typings.d.ts" />

import * as express from 'express';
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import * as crypto from 'crypto';


import { Jwt } from '../../models/jwt';

const patientModel = new Patient();
const jwt = new Jwt();

const router: Router = Router();

router.get('/patient-all', async (req: Request, res: Response) => {
  let db = req.db;
  try {
      const result = await patientModel.getAllPatient(db);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }

});

router.post('/patient-info', async (req: Request, res: Response) => {
  let db = req.db;
  const perId = req.body.perId;
  try {
      const result = await patientModel.getPatient(db,perId);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }

});

router.post('/patient-insert', async (req: Request, res: Response) => {
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

router.post('/patient-update', async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
  const id = req.body.id;
  try {
      const result = await patientModel.updatePatient(db,data,id);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }
});

router.post('/patient-update-tel', async (req: Request, res: Response) => {
  let db = req.db;
  const id = req.body.id;
  const tel = req.body.tel;
  try {
      const result = await patientModel.updatePatTel(db,id,tel);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }
});

router.post('/patient-del', async (req: Request, res: Response) => {
  let db = req.db;
  const id = req.body.id;
  try {
      const result = await patientModel.delPatient(db,id);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }
});

export default router;