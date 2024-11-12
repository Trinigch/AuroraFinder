import dotenv from 'dotenv';
dotenv.config();

export const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY as string;
export const AURORAS_API_KEY = process.env.AURORAS_API_KEY as string;
export const DATABASE_URL = process.env.DATABASE_URL as string;
export const JWT_SECRET = process.env.JWT_SECRET as string;
export const GEOAPIFY_API_KEY= process.env.GEOAPIFY_API_KEY as string;