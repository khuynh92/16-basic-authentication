'use strict';

export default (err, req, res, next) => {
  if(err == 401) {
    res.statusCode = 401;
    res.statusMessage = 'Unauthorized';
    res.write('ERROR: Invalid User ID/Password');
    res.end();
  }
  else {
    next(err);
  }
};