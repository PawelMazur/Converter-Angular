import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { TemperatureService } from '../../services/temperature.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private temperatureService: TemperatureService,
  ) { }

  celsius: number;
  fahrenheit: number;
  kelvin: number;

  ngOnInit() {
  }

  celsiusConverter(event: any){
    this.celsius = event.target.value; 
    this.fahrenheit = (this.celsius*1.8)+32;     
    this.kelvin = ((this.celsius * 1) + 273.15);
  }

  fahrenheitConverter(event: any){
    this.fahrenheit = event.target.value;
    this.celsius = (this.fahrenheit-32)/1.8;
    this.kelvin = ((  this.fahrenheit -32)/1.8)+273.15;
  }

  kelvinConverter(event: any){
    this.kelvin = event.target.value;
    this.celsius = this.kelvin-273.15;
    this.fahrenheit = ((this.kelvin-273.15)*1.8)+32;
  }

}
