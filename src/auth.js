export default {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) cb(true);
      this.onChange(true);
      return;
    }
    pretendRequest(email, pass, res => {
      if (res.authenticated) {
        localStorage.token = res.token;
        localStorage.username = res.username;
        localStorage.userId = res.userId;
        if (cb) cb(true);
        this.onChange(true);
      } else {
        if (cb) cb(false);
        this.onChange(false);
      }
    });
  },

  getUser() {
    return { username: localStorage.username };
  },

  getToken() {
    return localStorage.token;
  },

  logout(cb) {
    delete localStorage.token;
    if (cb) cb();
    this.onChange(false);
  },

  loggedIn() {
    return !!localStorage.token;
  },

  onChange() {}
};

import UserServices from "./services/UserServices";

function pretendRequest(username, password, cb) {
  UserServices.authenticate(username, password)
    .then(response => {
      console.log("userId: ", response.data);
      response.data
        ? cb({
            username: username,
            authenticated: true,
            userId: response.data.id,
            token: Math.random()
              .toString(36)
              .substring(7)
          })
        : cb({ authenticated: false });
    })
    .catch(() => cb({ authenticated: false }));
}
