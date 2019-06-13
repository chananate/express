import { User } from '../../models/information/user';
/// <reference path="../../../typings.d.ts" />

import * as express from 'express';
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import * as crypto from 'crypto';


import { Jwt } from '../../models/jwt';

const userModel = new User();
const jwt = new Jwt();

const router: Router = Router();

router.get('user-insert', async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
  try {
      const result = await userModel.insertUser(db,data);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
  }

});

export default router;