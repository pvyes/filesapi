class Person {
  #pid = null;
  #firstname = null;
  #firstnames = null;
  #lastname = null;
  #date_of_birth = null;
  #date_of_death = null;
  #createdAt = null;
  #updatedAt = null;

  constructor() {}

  getId() {
    return this.#pid;
  }

  getFirstname() {
    return this.#firstname;
  }

  setFirstname(value) {
    this.#firstname = value;
  }

  getFirstnames() {
    return this.#firstnames;
  }

  setFirstnames(value) {
    this.#firstnames = value;
  }

  getLastname() {
    return this.#lastname;
  }

  setLastname(value) {
    this.#lastname = value;
  }

  getDate_of_birth() {
    return this.#date_of_birth;
  }

  setDate_of_birth(value) {
    this.#date_of_birth = value;
  }

  getDate_of_death() {
    return this.#date_of_death;
  }

  setDate_of_death(value) {
    this.#date_of_death = value;
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

module.exports = Person;
