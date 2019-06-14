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

router.post('/patient-insert', async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
  const patient_personalId = req.body.patient_personalId;
  const patient_title = req.body.patient_title;
  const patient_name = req.body.patient_name;
  const patient_surname = req.body.patient_surname;
  const patient_bd = req.body.patient_bd;
  const patient_address = req.body.patient_address;
  const patient_religion = req.body.patient_religion;
  const patient_tel = req.body.patient_tel;
  try {
      const result = await patientModel.insertPatient(db,patient_personalId,patient_title,
        patient_name,patient_surname,patient_bd,patient_address,patient_religion,patient_tel);
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