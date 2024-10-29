const { DataTypes } = require("sequelize");
const sequelize = require("./db");

// Define the Tag model
const Tag = sequelize.define(
  "Tag",
  {
    tid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tagname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tags",
  }
);

// Define the Person model
const Person = sequelize.define(
  "Person",
  {
    aid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstnames: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_death: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "persons",
  }
);

// Define the ArtistFunction model
const ArtistFunction = sequelize.define(
  "ArtistFunction",
  {
    afid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    artistfunction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "artistfunctions",
  }
);

// Define the Artist model
const Artist = sequelize.define(
  "Artist",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    person_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Person,
        key: "aid",
      },
      allowNull: false,
    },
    artistfunction_id: {
      type: DataTypes.INTEGER,
      references: {
        model: ArtistFunction,
        key: "afid",
      },
      allowNull: false,
    },
  },
  {
    tableName: "artists",
  }
);

// Define the File model
const File = sequelize.define(
  "File",
  {
    fid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uri: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "files",
  }
);

// Define relationships
File.belongsToMany(Tag, { through: "FileTag" });
Tag.belongsToMany(File, { through: "FileTag" });

Artist.belongsTo(Person, { foreignKey: "person_id" });
Artist.belongsTo(ArtistFunction, { foreignKey: "artistfunction_id" });
File.hasMany(Artist, { foreignKey: "file_id" });

module.exports = {
  sequelize,
  Tag,
  Person,
  ArtistFunction,
  Artist,
  File,
};
