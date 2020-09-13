
var request = require('request');

  exports.findAllNews = (req, res) => {
    request({
      uri: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details',
      headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'X-RapidAPI-Host':'apidojo-yahoo-finance-v1.p.rapidapi.com',
     'X-RapidAPI-Key':'4c3a864cf5mshfb34c1cd71949c3p175a2cjsnb87f19241666'
   },
      qs: {
        region: "US",
        uuid: "9803606d-a324-3864-83a8-2bd621e6ccbd"
      }
    }).pipe(res);
  };
