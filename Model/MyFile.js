class MyFile {
  #uri = null;
  #id = null;
  #title = null;
  #description = null;
  #reference = null;
  #tags = [];
  #artists = [];
  #createdAt = null;
  #updatedAt = null;

  constructor() {}

  static getFilesFromDb() {
    var files = [];
    const db = require("../Database/database");
    db.getAllFiles().then((result) => {
      result.forEach((element) => {
        var file = new MyFile();
        file.#setId(element.id);
        file.setUri(element.uri);
        file.setTitle(element.title);
        file.setDescription(element.description);
        file.setReference(element.reference);
        file.setTags(element.tags);
        file.setArtists(element.artists);
        file.#setCreatedAt(element.createdAt);
        file.#setUpdatedAt(element.updatedAt);
        files.push(file);
      });
    });
    return files;
  }

  #setId(id) {
    this.#id = id;
  }

  getId() {
    return this.#id;
  }

  getUri() {
    return this.#uri;
  }

  setUri(uri) {
    this.#uri = uri;
  }

  getTitle() {
    return this.#title;
  }

  setTitle(title) {
    this.#title = title;
  }

  getDescription() {
    return this.#description;
  }

  setDescription(description) {
    this.#description = description;
  }

  getReference() {
    return this.#reference;
  }

  setReference(reference) {
    this.#reference = reference;
  }

  getTags() {
    return this.#tags;
  }

  setTags(tags) {
    this.#tags = tags;
  }

  getArtists() {
    return this.#artists;
  }

  setArtists(artists) {
    this.#artists = artists;
  }

  #setCreatedAt(createdAt) {
    this.#createdAt = createdAt;
  }

  getCreatedAt() {
    return this.#createdAt;
  }

  #setUpdatedAt(updatedAt) {
    this.#updatedAt = updatedAt;
  }

  getUpdatedAt() {
    return this.#updatedAt;
  }
}

module.exports = MyFile;
