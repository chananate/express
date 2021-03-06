import { User } from "../../models/information/user";
/// <reference path="../../../typings.d.ts" />

import * as express from "express";
import { Router, Request, Response } from "express";
import * as HttpStatus from "http-status-codes";
import * as crypto from "crypto";

import { Jwt } from "../../models/jwt";

const userModel = new User();
const jwt = new Jwt();

const router: Router = Router();

router.get("/user-all", async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
  try {
    const result = await userModel.getAllUser(db);
    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
    console.log(error.message);
    res.send({
      ok: false,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
});

router.post("/user", async (req: Request, res: Response) => {
  let db = req.db;
  const username = req.body.username;
  try {
    const result = await userModel.postUser(db, username);
    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
    console.log(error.message);
    res.send({
      ok: false,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
});

router.post("/check-type", async (req: Request, res: Response) => {
    let db = req.db;
    const tel = req.body.tel;
    try {
      const result = await userModel.checkType(db, tel);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result[0] });
    } catch (error) {
      console.log(error.message);
      res.send({
        ok: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message
      });
    }
  });

router.post('/user-emp-info', async (req: Request, res: Response) => {
    let db = req.db;
    const tel = req.body.tel;
    try {
        const result = await userModel.getUserWithEmpInfo(db,tel);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (error) {
        console.log(error.message);
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message 
      });
    }
  });

router.post('/user-pat-info', async (req: Request, res: Response) => {
    let db = req.db;
    const tel = req.body.tel;
    try {
        const result = await userModel.getUserWithPatInfo(db,tel);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (error) {
        console.log(error.message);
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message 
      });
    }
  });

router.post('/user-insert', async (req: Request, res: Response) => {

  let db = req.db;
  const data = req.body.data;
  const username = req.body.username;
  const password = req.body.password;
  const tel = req.body.tel;
  const type = req.body.type;
  try {
      const result = await userModel.insertUser(db,
        username,password,tel,type);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {

      console.log(error.message);
      res.send({
      ok: false,statusCode: HttpStatus.INTERNAL_SERVER_ERROR,message: error.message
    });
  }
  });

  router.post('/user-update', async (req: Request, res: Response) => {
    let db = req.db;
    const data = req.body.data;
    const username = req.body.username;
    try {
        const result = await userModel.updateUser(db,data,username);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (error) {
        console.log(error.message);
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
    }
});

  router.post('/user-delete', async (req: Request, res: Response) => {
  let db = req.db;
  const username = req.body.username;
  try {
    const result = await userModel.deleteUser(db, username);
    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
    console.log(error.message);
    res.send({ok: false,statusCode: HttpStatus.INTERNAL_SERVER_ERROR,message: error.message});
  }
});

export default router;
