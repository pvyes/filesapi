require("dotenv").config();

const db = require("./Database/database");

initiateDatabase();

async function initiateDatabase() {
  await db.createDb();

  var tag1 = await db.createTag({ tagname: "Classical" });
  var tag2 = await db.createTag({ tagname: "Romantic" });
  var tag3 = await db.createTag({ tagname: "Poetry" });

  var af1 = await db.createArtistFunction({ artistfunction: "Composer" });
  var af2 = await db.createArtistFunction({ artistfunction: "Writer" });

  var p1 = await db.createPerson({
    firstname: "Wolfgang",
    firstnames: "Amadeus",
    lastname: "Mozart",
    date_of_birth: "1756-01-27",
    date_of_death: "1791-12-05",
  });

  var p2 = await db.createPerson({
    firstname: "Franz",
    firstnames: "",
    lastname: "Schubert",
    date_of_birth: "1797-01-31",
    date_of_death: "1828-11-19",
  });

  var p3 = await db.createPerson({
    firstname: "Frédérick",
    firstnames: "",
    lastname: "Chopin",
    date_of_birth: "1810-03-01",
    date_of_death: "1849-10-17",
  });

  var p4 = await db.createPerson({
    firstname: "Johann",
    firstnames: "",
    lastname: "Goethe",
    date_of_birth: "1749-08-28",
    date_of_death: "1832-03-22",
  });

  var file1 = await db.createFile({
    uri: "https://www.youtube.com/watch?v=6JQm5aSjX6g",
    title: "Mozart - Symphony No. 40 in G minor, K. 550",
    description:
      "Symphony No. 40 in G minor, K. 550, was written by Wolfgang Amadeus Mozart in 1788. It is sometimes referred to as the Great G minor symphony, to distinguish it from the Little G minor symphony, No. 25. The two are the only extant minor key symphonies Mozart wrote.",
    reference: "https://en.wikipedia.org/wiki/Symphony_No._40_(Mozart)",
  });

  var file2 = await db.createFile({
    uri: "https://www.youtube.com/watch?v=ef-4Bv5Ng0w",
    title: "Chopin - Nocturne in E-flat major, Op. 9, No. 2",
    description:
      "Nocturne in E-flat major, Op. 9, No. 2, is very possibly the most famous work ever penned by Frédéric Chopin. It is also one of the most popular nocturnes in the repertoire.",
    reference: "https://en.wikipedia.org/wiki/Nocturnes,_Op._9_(Chopin)",
  });

  var file3 = await db.createFile({
    uri: "https://www.youtube.com/watch?v=JS91p-vmSf0",
    title: "Erlkönig",
    description:
      "Erlkönig is a poem by Johann Wolfgang von Goethe. It depicts the death of a child assailed by a supernatural being, the Erlking or 'Erlkönig'.",
    reference: "https://en.wikipedia.org/wiki/Erlkönig_(Goethe)",
  });

  await db.updateFiletags(file1, [tag1]);
  await db.updateFiletags(file2, [tag2]);
  await db.updateFiletags(file3, [tag2, tag3]);

  await db.createArtist(p2, af1, file1);
  await db.createArtist(p2, af1, file2);
  await db.createArtist(p3, af1, file3);
  await db.createArtist(p4, af2, file3);

  await db.deleteArtist(p2, af1, file1);
  await db.addArtist(p1, af1, file1);
}
