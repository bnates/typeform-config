'use strict';

require('dotenv').config();

const express = require('express');
const superagent = require('superagent');
const app = express();

app.get('/typeform-test', (req, res) => {
  superagent.get('https://api.typeform.com/forms/hogWCP3L')
  .set('typeform_personal_token', process.env.TYPEFORM_TOKEN)
  .then(data => console.log(data))
  .catch(err => console.log(err)); 
});

app.listen(3000, () => {
  console.log('server up: 3000');
})