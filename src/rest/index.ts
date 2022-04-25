import express, { Router } from "express";

const createRouter = (): Router => {
  const restRouter = express.Router();
  return restRouter;
};

export default createRouter;
