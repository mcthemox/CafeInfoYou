const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;
var client_id = 'XcvYvW9CbfHsPBMZsCBd';
var client_secret = 'sX43nsWJQi';
app.use(
  cors({
    origin: 'http://49.50.172.123:3000', // 접근 권한을 부여하는 도메인
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
  })
);

app.use('/blogSearch', (req, res) => {
  const name = req.query.value;
  axios({
    url: 'https://openapi.naver.com/v1/search/blog',
    params: {
      query: name,
      display: 1,
    },
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret,
    },
  }).then((response) => {
    res.send(response.data);
  });
});

app.get('/searchPlace', (req, res) => {
  const place = req.query.value;
  axios({
    url: 'https://dapi.kakao.com/v2/local/search/keyword.json?',
    params: {
      query: place,
      category_group_code: 'CE7',
    },
    headers: {
      Authorization: 'KakaoAK 8f5bcb0482043cceab2715b45665b51b',
    },
  }).then((response) => {
    res.send(response.data);
  });
});

app.get('/imageSearch', (req, res) => {
  const name = req.query.value;
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
  }).then((response) => {
    res.send(response.data);
  });
});

app.listen(port, () => {
  console.log('Server open : ', port);
});
