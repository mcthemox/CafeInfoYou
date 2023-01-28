const { default: axios } = require('axios');
const express = require('express');
const app = express();
const port = 3001;
var client_id = 'XcvYvW9CbfHsPBMZsCBd';
var client_secret = 'sX43nsWJQi';

app.use('/blogSearch', (req, res) => {
  const name = '홍대 떡볶이';
  axios({
    url: 'https://openapi.naver.com/v1/search/blog',
    params: {
      query: name,
      display: 20,
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

app.get('/searchPlace', (req, res) => {
  const place = '서울 디저트 카페';
  axios({
    url: 'https://dapi.kakao.com/v2/local/search/keyword.json?',
    params: {
      query: place,
    },
    headers: {
      Authorization: 'KakaoAK 8f5bcb0482043cceab2715b45665b51b',
    },
  }).then((res) => {
    console.log(res.data);
  });
});

app.listen(port, () => {
  console.log('Server open : ', port);
});
