const amazon = require('./amazon');

(async () => {
  
  await amazon.initialize();

  let details = await amazon.getProductDetails('https://www.amazon.com/dp/B07RZWHHHP');

  debugger;

})();