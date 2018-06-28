'use strict';

require('dotenv').config();

require('babel-register');
require('babel-polyfill');


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

require('./src/app.js').start(process.env.PORT);