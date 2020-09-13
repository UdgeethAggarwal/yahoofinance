var request = require('request');

//Add your host and key
exports.fetchStockAnalysis = (req, res) => {
  request({
    uri: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis',
    headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json',
   'X-RapidAPI-Host':'',
   'X-RapidAPI-Key':''
 },
    qs: {
      region: "US",
      symbol: "AMRN"
    }
  }).pipe(res);
};
