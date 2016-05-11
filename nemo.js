var Nemo = require('nemo');

var nemo = Nemo(__dirname, function (err) {
  if (!!err) {
    return console.error('Error during Nemo setup', err);
  }
  nemo.driver.getCapabilities().
    then(function (caps) {
      console.log("Nemo successfully launched", caps.caps_.browserName);
    });

  nemo.driver.get(nemo.data.baseUrl);
  nemo.driver.manage().window().maximize();
  nemo.view._waitVisible('name:q');
  nemo.view._find('name:q').sendKeys('BrowserStack');
  nemo.driver.getTitle().then(function (title) {
    console.log('The page title is ' + title);
    nemo.driver.quit();
  }, function (err) {
    console.error(err);
    nemo.driver.quit();
  });
});
