import { httpServer } from './app';
import 'dotenv/config';

const PORT = process.env.PORT;

httpServer.listen(PORT, () => console.log(`App running on port: ${PORT}`));
  