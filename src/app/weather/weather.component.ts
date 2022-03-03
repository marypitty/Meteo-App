import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoordinateService } from 'src/coordinates.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  constructor(private service: CoordinateService) {}

  location: string = '';
  name: any = '';
  sunset: any;
sunset_time: any;
  temp: any;
  temp_min: any;
  temp_max: any;
  temp_feels_like: any;
  humidity: any;
  isDay:any;
hidden: any;


  ngOnInit(): void {}

  findWeather() {
    this.service.getData(this.location).subscribe({
      next: (x: any) => {
this.hidden = true;
        this.name = x.name;
        this.sunset = new Date(x.sys.sunset * 1000);
        this.sunset_time = this.sunset.toLocaleTimeString();
        this.temp = (x.main.temp - 273.15).toFixed(0); // modify temperature to celsius
        this.temp_min = (x.main.temp_min - 273.15).toFixed(0);
        this.temp_max = (x.main.temp_max - 273.15).toFixed(0);
        this.temp_feels_like = (x.main.feels_like - 273.15).toFixed(0);
        this.humidity = x.main.humidity;
        let CurrentDate = new Date();
        this.isDay = (CurrentDate.getTime() < this.sunset.getTime());
       
        console.log(x);
      },
      error: () => {
        console.log('error');
      },
      complete: () => {},
    });
  }
}
