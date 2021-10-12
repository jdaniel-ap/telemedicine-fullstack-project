"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongodb = require('mongodb');
require('dotenv/config');

const DB_NAME = process.env.MONGO_DB;
const MONGO_DB_URL = process.env.URI;

 const connection = _mongodb.MongoClient.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} ).then((connection) => connection.db(DB_NAME)).catch((err) => {
  console.error(err);
  process.exit(1);
}); exports.connection = connection;
