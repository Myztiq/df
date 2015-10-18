import Promise from "bluebird";
import config from "services/config";

var loggedIn = false;
var Auth = {
  loggedIn: function () {
    return loggedIn;
  },
  login: function (credentials) {
    return Promise.resolve(
      $.post(config.API + '/login', credentials)
    ).then(function (response) {
        loggedIn = true;
        return response;
      })
      .catch(function (response) {
        throw response.responseJSON;
      });
  },
  register: function () {
    return new Promise(function(resolve, reject){
      reject(new Error('Register not setup yet.'));
    })
  }
};
export default Auth;