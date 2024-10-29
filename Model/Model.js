class Model {
  MyFile = require("./MyFile.js");
  Tag = require("./Tag.js");
  Artist = require("./Artist.js");
  ArtistFunction = require("./Artistfunction.js");

  #files = [];
  #tags = [];
  #artistfunctions = [];
  #artists = [];

  constructor() {
    this.#files = MyFile.getFilesFromDb();
    this.#tags = Tag.getTagsFromDb();
    this.#artistfunctions = ArtistFunction.getArtistFunctionsFromDb();
    this.#artists = Artist.getArtistsFromDb();
    this.#renderfiles();
  }

  #renderfiles() {
    this.#files.forEach((file) => {
      this.#rendertags(file);
      this.#renderartists(file);
    });
  }

  // Tags are given with the id, but must be transformed to instances of the Tag class.
  #rendertags(file) {
    var renderedtags = [];
    file.tags.forEach((tid) => {
      this.#tags.forEach((tag) => {
        if (tag.getId() == tid) {
          renderedtags.push(tag);
        }
      });
    });
    file.setTags(renderedtags);
  }

  // Artists are given with the id, but must be transformed to instances of the Tag class.
  #renderartists(file) {
    var renderedtags = [];
    file.tags.forEach((tid) => {
      this.#tags.forEach((tag) => {
        if (tag.getId() == tid) {
          renderedtags.push(tag);
        }
      });
    });
    file.setTags(renderedtags);
  }

  static writeFileToDb() {}
}

module.exports = Model;
