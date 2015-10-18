import Promise from "bluebird";
var loggedIn = false;
var Auth = {
  loggedIn: function () {
    return loggedIn;
  },
  login: function () {
    return new Promise(function(resolve, reject){
      setTimeout(function () {
        loggedIn = true;
        resolve();
      }, 2000);
    })
  },
  register: function () {
    return new Promise(function(resolve, reject){
      reject(new Error('Register not setup yet.'));
    })
  }
};
export default Auth;