var request = require('request');


exports.fetchStockAnalysis = (req, res) => {
  request({
    uri: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis',
    headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json',
   'X-RapidAPI-Host':'apidojo-yahoo-finance-v1.p.rapidapi.com',
   'X-RapidAPI-Key':'4c3a864cf5mshfb34c1cd71949c3p175a2cjsnb87f19241666'
 },
    qs: {
      region: "US",
      symbol: "AMRN"
    }
  }).pipe(res);
};
