import dotenv from 'dotenv';
import connectDB from './db/index.js';
import App from './app.js';

dotenv.config({ path: './config.env' });
 connectDB()
 .then(() => {
    App.listen(process.env.PORT||3000, () => {
        console.log(`\n Server is running on port ${process.env.PORT}...`);
    });
 }).catch((error) => {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
 })
 