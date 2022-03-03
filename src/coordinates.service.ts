import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoordinateService {
  private apiKey = 'aafb736d3a2de95c23ee5d762ef44738';

  constructor(private http: HttpClient) {}

  getData(city: any) {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    );
  }
}
