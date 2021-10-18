import { v2 } from 'cloudinary';
import 'dotenv/config';

v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

export { v2 }