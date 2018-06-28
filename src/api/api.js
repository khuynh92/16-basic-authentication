
'use strict';


import express from 'express';
import fs from 'fs';
const router = express.Router();

router.get('/', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';

  fs.readFile(__dirname + '/../../public/index.html', (err, data) => {
    let message = `HOMEPAGE <br><br> access api by going  <a href='api/v1/pizza'>here`;
    res.write(data.toString().replace('{{template}}', message));
    res.end();
  });
});

export default router;
