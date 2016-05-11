var child_process = require('child_process');
var browserstack = require('browserstack-local');

var bs_local = new browserstack.Local();
var bs_local_args = { 'key': process.env.BROWSERSTACK_ACCESS_KEY, 'forcelocal': true };

bs_local.start(bs_local_args, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected. Now testing...');

    child_env = process.env;
    child_env["NODE_ENV"] = "local";
    child = child_process.execSync('node nemo.js', { stdio: [ 0, 0, 0 ], env: child_env });

    if(child) {
      child.on('exit', function() {
        if(bs_local) {
          bs_local.stop(function() {});
        }

        exit(0);
      });
    }
  }
  if(bs_local) {
    bs_local.stop(function() {});
  }
});
