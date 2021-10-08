import { ConnectOptions, MongoClient } from 'mongodb';
import 'dotenv/config';

const DB_NAME = process.env.MONGO_DB;
const MONGO_DB_URL = process.env.URI;

export const connection = MongoClient.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions).then((connection) => connection.db(DB_NAME)).catch((err) => {
  console.error(err);
  process.exit(1);
});
