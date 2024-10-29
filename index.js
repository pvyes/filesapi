require("dotenv").config();

const db = require("./Database/database");
const Tag = require("./Model/Tag");

testdb();

async function testdb() {
  var dbtags = await db.getAllTags();
  //console.log("DbTag:", dbtags);
  var tags = [];
  dbtags.forEach((tag) => {
    var newtag = new Tag();
    newtag.setId(tag.tid);
    newtag.setTagname(tag.tagname);
    newtag.setCreatedAt(tag.createdAt);
    newtag.setUpdatedAt(tag.updatedAt);
    tags.push(newtag);
  });
  console.log("Tag 3 :", tags[2].getTagname());
  tags[2].setTagname("Comedy");
  await Tag.writeTagToDb(tags[2]);
  console.log("Tag written 2:", tags[2].getId());
}
