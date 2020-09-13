
var request = require('request');
//Add your host, key, and uuid
  exports.findAllNews = (req, res) => {
    request({
      uri: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details',
      headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'X-RapidAPI-Host':'',
     'X-RapidAPI-Key':''
   },
      qs: {
        region: "US",
        uuid: ""
      }
    }).pipe(res);
  };
