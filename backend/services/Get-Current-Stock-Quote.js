const finnhub = require("finnhub");

const getCurrentStockQuote = async (listOfSymbols) => {
  // Need to filter results to ensure they're all unique. IF not the API will call multiple duplicates
  const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  api_key.apiKey = "c5olrciad3idr38tbmig";
  const finnhubClient = new finnhub.DefaultApi();

  const resultsArray = [];
  for (let i = 0; i < listOfSymbols.length; i++) {
    await finnhubClient.quote(listOfSymbols[i], (error, data, response) => {
      let symbolObject = {};
      symbolObject[listOfSymbols[i]] = data.c;
      resultsArray.push[{ symbolObject }];
    });
  }
  return resultsArray;
};

module.exports = getCurrentStockQuote;
