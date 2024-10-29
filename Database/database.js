const {
  sequelize,
  File,
  Tag,
  Person,
  ArtistFunction,
  Artist,
} = require("./models");

const createDb = function () {
  try {
    sequelize.sync({ force: true }).then(() => {
      console.log("Database & tables created.");
    });
  } catch (e) {
    console.error(e);
  }
};

const updateDb = function () {
  try {
    sequelize.sync({}).then(() => {
      console.log("Database & tables updated.");
    });
  } catch (e) {
    console.error(e);
  }
};

//CREATE

// Create a new File
async function createFile(file) {
  const newFile = await File.create({
    uri: file.getUri(),
    title: file.getTitle(),
    description: file.getDescription(),
    reference: file.getReference(),
  });
  await newFile.addTags(file.getTags());
  await newFile.addArtists(file.getArtists());
  console.log("File created:", newFile);
  return newFile;
}

// Create a new Tag
async function createTag(tag) {
  const newTag = await Tag.create({
    tagname: tag.getTagname(),
  });
  console.log("Tag created:", newTag);
  return newTag;
}

// Create a new Person
async function createPerson(person) {
  const newPerson = await Person.create({
    firstname: person.firstname,
    firstnames: person.firstnames,
    lastname: person.lastname,
    date_of_birth: person.date_of_birth,
    date_of_death: person.date_of_death,
  });
  console.log("Person created:", newPerson);
  return newPerson;
}

// Create a new ArtistFunction
async function createArtistFunction(artistfunction) {
  const newArtistFunction = await ArtistFunction.create({
    artistfunction: artistfunction.artistfunction,
  });
  console.log("ArtistFunction created:", newArtistFunction);
  return newArtistFunction;
}

//READ
// Find all Files
async function getAllFiles() {
  const files = await File.findAll();
  console.log("All files:", files);
}

// Find all Tags
async function getAllTags() {
  const tags = await Tag.findAll();
  console.log("All tags:", tags);
  return tags;
}

// Find all Artistfunctions
async function getAllArtistfunctions() {
  const artistfunctions = await Artistfunction.findAll();
  console.log("All artistfunctions:", artistfunctions);
}

// Find all Artists
async function getAllArtists() {
  const artists = await Artist.findAll();
  console.log("All arttists:", artists);
}

// Find a File by ID
async function getFileById(fileId) {
  const file = await File.findOne({ where: { fid: fileId } });
  console.log("File:", file);
}

// Find a Person by ID
async function getPersonById(personId) {
  const person = await Person.findOne({ where: { aid: personId } });
  console.log("Person:", person);
}

// Find a Tag by ID
async function getTagById(tagId) {
  const tag = await Tag.findOne({ where: { tid: tagId } });
  console.log("Tag:", tag);
  return tag;
}

//UPDATE

// Update a File by ID
async function updateFile(file) {
  const updatedFile = await File.update(
    {
      title: file.title,
      description: file.description,
      reference: file.reference,
      uri: file.uri,
    },
    { where: { fid: file.fid } }
  );
  console.log("File updated:", updatedFile);
}

async function updatePerson(person) {
  const updatedPerson = await Person.update(
    {
      firstname: person.firstname,
      firstnames: person.firstnames,
      lastname: person.lastname,
      date_of_birth: person.date_of_birth,
      date_of_death: person.date_of_death,
    },
    { where: { aid: person.aid } }
  );
  console.log("Person updated:", updatedPerson);
}

async function updateTag(tag) {
  const updatedTag = await Tag.update(
    { tagname: tag.getTagname() },
    { where: { tid: tag.getId() } }
  );
  console.log("Tag updated:", updatedTag);
  return await getTagById(tag.getId());
}

async function updateArtistfunction(artistfunction) {
  const updatedArtistfunction = await Artistfunction.update(
    { artistfunction: artistfunction.tagname },
    { where: { afid: artistfunction.afid } }
  );
  console.log("Artistfunction updated:", updatedArtistfunction);
}

//DELETE

// Delete a File by ID
async function deleteFile(file) {
  const deletedFile = await File.destroy({ where: { fid: file.fid } });
  console.log("File deleted:", deletedFile);
}

// Delete a Person by ID
async function deletePerson(person) {
  const deletedPerson = await Person.destroy({ where: { aid: person.aid } });
  console.log("Person deleted:", deletedPerson);
}

// Delete a Tag by ID
async function deleteTag(tag) {
  const deletedTag = await Tag.destroy({ where: { tid: tag.tid } });
  console.log("Tag deleted:", deletedTag);
}

// Delete an Artistfunction by ID
async function deleteArtistfunction(artistfunction) {
  const deletedArtistfunction = await Artistfunction.destroy({
    where: { afid: artistfunction.afid },
  });
  console.log("Artistfunction deleted:", deletedArtistfunction);
}

module.exports = {
  sequelize,
  createDb,
  updateDb,
  createFile,
  createTag,
  createPerson,
  createArtistFunction,
  getAllFiles,
  getAllTags,
  getAllArtistfunctions,
  getAllArtists,
  getFileById,
  getPersonById,
  updateFile,
  updateTag,
  updatePerson,
  updateArtistfunction,
  deleteFile,
  deletePerson,
  deleteTag,
  deleteArtistfunction,
};
