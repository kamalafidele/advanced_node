const axios = require('axios');
const POLLING_RATE = 5000;
const URL = 'https://jsonplaceholder.typicode.com/users';

setInterval(() => {
 axios.get(URL)
      .then(res => {
        console.table(res.data);
      })
      .catch(e => {
        console.log(e);
      });

}, POLLING_RATE);