nemo-browserstack
=========

This repository provides information and helpful tweaks to run your Nemo tests on the BrowserStack selenium cloud infrastructure.

###Setup
Install npm
Install dependencies using `npm install`.


###Configuration
Set browserstack environment variables as in the below shell example

```shell
$ export BSTK_USER=myusername1
$ export BSTK_KEY=aa4235ssdda
$ export BSTK_BROWSER=chrome
$ export BSTK_VERSION=22.0
```

Run node command with NODE_ENV=browserstack to engage the `browserstack.json` override

```shell
$ NODE_ENV=browserstack node nemo.js
```

###Run tests
To run the tests, execute: `node nemo.js`


###Further Reading
[Nemo](https://nemo.js.org)
[BrowserStack documentation for Automate](https://www.browserstack.com/automate/node)

Happy Testing!