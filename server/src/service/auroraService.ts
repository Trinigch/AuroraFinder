import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

interface Coordinates {
  lat: number;
  lon: number;
}

interface AuroraData {
  kp: number;
  date: string;
}

class AuroraService {
  private baseURL: string;

  constructor() {
    this.baseURL = process.env.API_BASE_URL || 'https://api.auroras.live';

    if (!this.baseURL) {
      throw new Error('API base URL is missing.');
    }
  }

  private buildAuroraQuery(coordinates: Coordinates): string {
    return `${this.baseURL}/v1/?type=all&lat=${coordinates.lat}&long=${coordinates.lon}&forecast=false&threeday=false`;
  }

  private async fetchAuroraData(coordinates: Coordinates): Promise<AuroraData> {
    const url = this.buildAuroraQuery(coordinates);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch aurora data.');
    }

    const data = await response.json();

    // Extraer Kp y la fecha
    const kp = data.ace?.kp || data.probability?.value; // Usamos el valor de 'kp' si está disponible
    const date = data.date || data.ace?.date; // Usamos la fecha de la respuesta

    return { kp, date };
  }

  async getAuroraDataForCoordinates(lat: number, lon: number): Promise<AuroraData> {
    const coordinates: Coordinates = { lat, lon };
    return await this.fetchAuroraData(coordinates);
  }
}

export default new AuroraService();
