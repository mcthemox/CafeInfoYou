import React from 'react';
import axios from 'axios';

export default function Blog() {
  const test = () => {
    // axios({
    //   method: 'get',
    //   url: 'https://seoul.openapi.redtable.global/api/food/img?serviceKey=ZN5LgzD8Q3Eb1d8PMCsZ99M5KRhKIVC5JiCKQBMqf4jdJpvK4AKnAB1KKqPg8prm',
    // }).then((res) => {
    //   console.log(res.data);
    // });

    var url = 'http://apis.data.go.kr/B553077/api/open/sdsc2/storeZoneOne';
    var queryParams =
      '?' +
      encodeURIComponent('serviceKey') +
      '=7CvecTjB%2FKnrxe8boBQb7a411PVg9AvlPNcfDJVhRG7fGDSR%2BHcivIMfVGO%2FejlstdD3I5NZjv2cNrHyH1zEuQ%3D%3D'; /* Service Key*/
    queryParams +=
      '&' + encodeURIComponent('key') + '=' + encodeURIComponent('9144'); /* */
    queryParams +=
      '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /* */

    axios(
      {
        url: url + queryParams,
        method: 'GET',
      }
      // ,
      // function (error, response, body) {
      //   //console.log('Status', response.statusCode);
      //   //console.log('Headers', JSON.stringify(response.headers));
      //   //console.log('Reponse received', body);
      // }
    ).then((res) => {
      console.log(res.data);
    });
  };

  const blogTest = () => {
    axios({
      url: 'http://localhost:3001/blogSearch',
    });
  };
  return <button onClick={blogTest}>Blog</button>;
}
