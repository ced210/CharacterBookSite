import http from "../http-common";

class CharacterServices {
  create(newCharacter) {
    return http.post(`/characters`, newCharacter);
  }
}

export default new CharacterServices();
