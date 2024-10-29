class ArtistFunction {
  #afid = null;
  #artistFunction = null;
  #createdAt = null;
  #updatedAt = null;

  constructor() {}

  // Getters
  getAfid() {
    return this.#afid;
  }

  getArtistFunction() {
    return this.#artistFunction;
  }

  getCreatedAt() {
    return this.#createdAt;
  }

  getUpdatedAt() {
    return this.#updatedAt;
  }

  // Setters
  #setAfid(afid) {
    this.#afid = afid;
  }

  setArtistFunction(artistFunction) {
    this.#artistFunction = artistFunction;
  }

  #setCreatedAt(createdAt) {
    this.#createdAt = createdAt;
  }

  #setUpdatedAt(updatedAt) {
    this.#updatedAt = updatedAt;
  }
}

module.exports = ArtistFunction;
