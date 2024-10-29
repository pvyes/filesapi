class Tag {
  #tid = null;
  #tagname = null;
  #createdAt = null;
  #updatedAt = null;

  constructor() {}

  getTagname() {
    return this.#tagname;
  }

  setTagname(tagname) {
    console.log("Setting tagname to:", tagname);
    this.#tagname = tagname;
  }

  setId(id) {
    this.#tid = id;
  }

  getId() {
    return this.#tid;
  }

  setCreatedAt(createdAt) {
    this.#createdAt = createdAt;
  }

  getCreatedAt() {
    return this.#createdAt;
  }

  setUpdatedAt(updatedAt) {
    this.#updatedAt = updatedAt;
  }

  getUpdatedAt() {
    return this.#updatedAt;
  }

  static async writeTagToDb(tag) {
    const db = require("../Database/database.js");
    var newtag = null;
    if (tag.getId() == null) {
      newtag = await db.createTag(tag);
    } else {
      newtag = await db.updateTag(tag);
    }
    Tag.updateTagFromDb(tag, newtag);
  }

  static updateTagFromDb(tag, newtag) {
    console.log("Updating tag from db:", newtag);
    tag.setId(newtag.tid);
    tag.setCreatedAt(newtag.createdAt);
    tag.setUpdatedAt(newtag.updatedAt);
  }
}

module.exports = Tag;
