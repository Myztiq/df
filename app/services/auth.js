import Promise from "bluebird";
import config from "config";

var loggedIn = false;
var user = null;
var Auth = {
  loggedIn: function () {
    return new Promise(function (resolve, reject) {
      resolve(loggedIn);
    });
  },
  login: function (credentials) {
    return Promise.resolve(
      $.post(config.API + '/login', credentials)
    ).then(function (response) {
        loggedIn = true;
        user = response;
        return response;
      })
      .catch(function (response) {
        throw response.responseJSON || 'Unable to communicate with API';
      });
  },
  register: function (registrationDetails) {
    return Promise.resolve(
      $.post(config.API + '/register', registrationDetails)
    ).then(function (response) {
        loggedIn = true;
        user = response;
        return response;
      })
      .catch(function (response) {
        throw response.responseJSON || 'Unable to communicate with API';
      });
  },
  logout: function() {
    loggedIn = false;
  },
  getUser: function () {
    return new Promise(function (resolve, reject) {
      if (user) {
        return resolve(user);
      }
      reject('Not Logged In');
    });

  }

};
export default Auth;