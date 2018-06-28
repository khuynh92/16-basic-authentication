'use strict';

import User from './users.js';

export default (req, res, next) => {
  
  let authenticate = (userObj) => {
    User.authenticate(userObj)
      .then(user => {
        if(!user) {
          getAuth();
        } else {
          req.token = user.generateToken();
          next();
        }
      })
      .catch(next);
  };

  let getAuth = () => {
    next('401');  
  };

  try {
    let userObj = {};
    let authHeader = req.headers.authorization;
    if(!authHeader) {
      return getAuth();
    }

    if(authHeader.match(/basic/i)) {
      let base64Header = authHeader.replace(/Basic\s+/i, ''); 
      let base64Buffer = Buffer.from(base64Header,'base64');
      let bufferString = base64Buffer.toString();
      let [username,password] = bufferString.split(':');
      userObj = {username,password};
      
      authenticate(userObj);

    }
  } catch(error) {
    next(error);
  }

};
