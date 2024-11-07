import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config();

interface Coordinates {
  lat: number;
  lon: number;
}

class Aurora {
  city: string;
  date: string;
  icon: string;
  description: string;
  temperature: number;

  constructor(city: string, date: string, icon: string, description: string, temperature: number) {
    this.city = city;
    this.date = date;
    this.icon = icon;
    this.description = description;
    this.temperature = temperature;

  }
}

class AuroraService {
  private baseURL: string;
  private apiKey: string;
  private cityName: string = '';

  constructor() {
    this.baseURL = process.env.API_BASE_URL || 'https://api.auroras.live';
    this.apiKey = process.env.API_KEY || 'zfemcDJWKzjaczrOmqYHdPpzYpPfsiRA';

    if (!this.baseURL || !this.apiKey) {
      throw new Error('API base URL or API key is missing.');
    }
  }

  private async fetchLocationData(query: string): Promise<any> {
    const response = await fetch(
      `${this.baseURL}/geo/1.0/direct?q=${query}&limit=1&appid=${this.apiKey}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch location data.");
    }
    const data = await response.json();
    return data[0];
  }

  private destructureLocationData(locationData: any): Coordinates {
    return { lat: locationData.lat, lon: locationData.lon };
  }

  private buildAuroraQuery(coordinates: Coordinates): string {
    return `${this.baseURL}/v1/?type=all&lat=${coordinates.lat}&long=${coordinates.lon}&forecast=false&threeday=false`;
  }

  private async fetchAndDestructureLocationData(): Promise<Coordinates> {
    const locationData = await this.fetchLocationData(this.cityName);
    return this.destructureLocationData(locationData);
  }

  private async fetchAuroraData(coordinates: Coordinates): Promise<Aurora[]> {
    const response = await fetch(this.buildAuroraQuery(coordinates));
    if (!response.ok) {
      throw new Error("Failed to fetch aurora data.");
    }
    const res = await response.json();
    const currentAurora: Aurora = this.parseCurrentAurora(res);
    const forecastAurora: Aurora[] = this.buildForecastArray(currentAurora, res.list);
    return forecastAurora;
  }Search..
  Ctrl + P
  

  private parseCurrentAurora(response: any): Aurora {
    const currentAurora = response.list[0];
    const city = this.cityName;
    const date = new Date(currentAurora.dt * 1000).toLocaleDateString();
    const icon = currentAurora.weather[0].icon;
    const description = currentAurora.weather[0].description;
    const temperature = currentAurora.main.temp;


    return new Aurora(city, date, icon, description, temperature);
  }

  private buildForecastArray(currentAurora: Aurora, auroraData: any[]): Aurora[] {
    const auroraArray: Aurora[] = [currentAurora];
    const filteredForecast = auroraData.filter((data: any) => data.dt_txt.includes("12:00:00"));

    for (const day of filteredForecast) {
      auroraArray.push(
        new Aurora(
          this.cityName,
          new Date(day.dt * 1000).toLocaleDateString(),
          day.weather[0].icon,
          day.weather[0].description,
          day.main.temp,
        )
      );
    }
    return auroraArray;
  }

  async getAuroraForCity(city: string): Promise<Aurora[]> {
    this.cityName = city;
    const coordinates = await this.fetchAndDestructureLocationData();
    return await this.fetchAuroraData(coordinates);
  }
}

export default new AuroraService();