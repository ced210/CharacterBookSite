import http from "../http-common";

class UserServices {
  authenticate(username, password) {
    return http.get(`/users/${username}/${password}`);
  }

  create(newUser) {
    return http.post(`/users`, newUser);
  }
}

export default new UserServices();
