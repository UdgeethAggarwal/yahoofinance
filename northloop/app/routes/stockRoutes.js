module.exports = app => {
    const stocksData = require("../controllers/stockController.js");

    var router = require("express").Router();

    router.get("/", stocksData.fetchStockAnalysis);
    app.use('/api/stocks', router);
  };
