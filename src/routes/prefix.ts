/// <reference path="../../typings.d.ts" />

import { Router, Request, Response } from "express";
import * as HttpStatus from "http-status-codes";
import { LibPrefixModel } from "../models/prefix";

const libPrefixModel = new LibPrefixModel();

const router: Router = Router();

router.get("/get-prefix", async (req: Request, res: Response) => {
  let db = req.db;
  try {
    const result = await libPrefixModel.getPrefix(db);
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

router.get(
  "/search-prefix/:columnName/:searchValue",
  async (req: Request, res: Response) => {
    let db = req.db;
    const columnName = req.params.columnName;
    const searchValue = req.params.searchValue;

    try {
      const result = await libPrefixModel.searchPrefix(
        db,
        columnName,
        searchValue
      );
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (error) {
      console.log("search-prefix ", error.message);
      res.send({
        ok: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message
      });
    }
  }
);

router.post("/insert-prefix", async (req: Request, res: Response) => {
  let db = req.db;
  const prefix = req.body.prefix;
  const dep = req.body.dep;

  try {
    const result = await libPrefixModel.insertPrefix(db, prefix, dep);
    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
    console.log("insert-prefix ", error.message);
    res.send({
      ok: false,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
});

router.post("/update-prefix", async (req: Request, res: Response) => {
  let db = req.db;
  const prefix = req.body.prefix;
  const dep = req.body.dep;

  try {
    const result = await libPrefixModel.updatePrefix(db, prefix, dep);
    res.send({ statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
    console.log("update-prefix ", error.message);
    res.send({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
});

router.post("/delete-prefix", async (req: Request, res: Response) => {
  let db = req.db;
  const prefix = req.body.prefix;

  try {
    const result = await libPrefixModel.deletePrefix(db, prefix);
    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
    console.log("delete-prefix ", error.message);
    res.send({
      ok: false,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
});

export default router;
