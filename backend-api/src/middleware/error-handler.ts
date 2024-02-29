import express from 'express';

export const errorHandler = (err: Error, _req, res: express.Response, _next) => {
    console.error(err.stack);
    res.status(500).send({error: 'Internal Server Error'});
  }
