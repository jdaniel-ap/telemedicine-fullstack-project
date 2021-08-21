require('dotenv').config();

const { MongoClient } = require('mongodb');

const MONGO_DB_URL = process.env.REACT_APP_MONGO_URL;

const DB_NAME = process.env.REACT_APP_DB_NAME;

const connection = () => MongoClient.connect(
  MONGO_DB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then((connection) => connection.db(DB_NAME)).catch((err) => {
    console.error(err);
    process.exit(1);
  });

  module.exports = connection;