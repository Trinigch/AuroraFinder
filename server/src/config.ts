// TODO: Import dotenv to load environment variables
import dotenv from 'dotenv';
dotenv.config();

// TODO: Define and export variables for each API key and sensitive information needed across the app
export const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY as string;
export const AURORAS_API_KEY = process.env.AURORAS_API_KEY as string;

// TODO: Include other configuration values as needed
