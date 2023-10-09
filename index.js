const express = require('express');
const axios = require('axios');

const app = express();


app.use('/info', require('routes'))

console.log('This is from the new features branch!');

app.listen(5000, () => console.log('Server listening on port 5000'));