const db = require("../connection");

const createTables = async () => {
  await db.query(`
  CREATE TABLE trees (
    tree_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    scientific_name VARCHAR NOT NULL,
    location VARCHAR NOT NULL,
    
  );`);

  await db.query(`
  CREATE TABLE treePics (
    photo_id SERIAL PRIMARY KEY,
    tree_id INT REFERENCES trees(tree_id) NOT NULL,
    taken_by VARCHAR REFERENCES users(username) NOT NULL,
    url VARCHAR NOT NULL,
  );`);

  await db.query(`
  CREATE TABLE users (
    username VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL,
    avatar_url VARCHAR
  );`);
};

const dropTables = async () => {
  await db.query(`DROP TABLE IF EXISTS trees;`);
  await db.query(`DROP TABLE IF EXISTS treePics;`);
  await db.query(`DROP TABLE IF EXISTS users;`);
};

module.exports = { createTables, dropTables };
