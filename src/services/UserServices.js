import http from "../http-common";

class UserServices {
  authenticate(username, password) {
    return http.get(`/users/${username}/${password}`);
  }
}

export default new UserServices();
