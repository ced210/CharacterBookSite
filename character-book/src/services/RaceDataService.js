import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/races");
  }

  get(id) {
    return http.get(`/races/${id}`);
  }

  create(data) {
    return http.post("/races", data);
  }

  update(id, data) {
    return http.put(`/races/${id}`, data);
  }

  delete(id) {
    return http.delete(`/races/${id}`);
  }
}

export default new TutorialDataService();
