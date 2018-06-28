
'use strict';


import express from 'express';
import fs from 'fs';
const router = express.Router();

router.get('/', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';

  fs.readFile(__dirname + '/../../public/index.html', (err, data) => {
    res.write(data);
    res.end();
  });
});

export default router;
