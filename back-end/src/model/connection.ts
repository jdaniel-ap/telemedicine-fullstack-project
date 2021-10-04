import { MongoClient } from 'mongodb';

const DB_NAME = 'pacientChat';
const MONGO_DB_URL = `mongodb://localhost:27017/${DB_NAME}`;

export const connection = MongoClient.connect(MONGO_DB_URL).then((connection) => connection.db(DB_NAME)).catch((err) => {
  console.error(err);
  process.exit(1);
});

