import http from "../http-common";

class CharacterServices {
  save(newCharacter) {
    return http.post(`/characters`, newCharacter);
  }
  getAllFullByUserId = async userId => {
    return await http.get(`/characters/${userId}`);
  };
}

export default new CharacterServices();
