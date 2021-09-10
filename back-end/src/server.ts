import { app } from './app';
import 'dotenv/config';

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
  