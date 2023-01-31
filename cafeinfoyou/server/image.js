const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3002;
var client_id = '6AQJAkqF2OIxWybHF069';
var client_secret = 'nxA4HS8MHu';
app.use(cors()); 


app.use('/imageSearch', (req, res) => {
  const name = '브레디 포스트';
  axios({
    url: 'https://openapi.naver.com/v1/search/image',
    params: {
      query: name,
      display: 1,
    },
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret,
    },
  }).then((res) => {
      console.log(res.data);
    // res.send(true);
  });
});


app.listen(port, () => {
  console.log('Server open : ', port);
});
