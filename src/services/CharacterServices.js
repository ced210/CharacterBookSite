import http from "../http-common";

class CharacterServices {
  create(newCharacter) {
    return http.post(`/characters`, newCharacter);
  }
  findAllByUser = async () => {
    return await http.get(`/characters/${localStorage.userId}`);
  };
}

export default new CharacterServices();
