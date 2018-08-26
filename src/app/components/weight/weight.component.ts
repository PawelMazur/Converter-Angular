import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { WeightService } from '../../services/weight.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private weightService: WeightService,
  ) { }

  kilograms: number;
  ounces: number;
  pounds: number;
  grams: number;
  stones: number;

  ngOnInit() {
  }

  kgConverter(event: any){
    this.kilograms = event.target.value;
    this.ounces = this.kilograms*35.274;
    this.pounds = this.kilograms*2.2046;
    this.grams = this.kilograms*1000;
    this.stones = this.kilograms*0.1574;
  }

  ouncesConverter(event: any){
    this.ounces = event.target.value;
    this.kilograms = this.ounces/35.274;
    this.pounds = this.ounces*0.0625;
    this.grams = this.ounces/0.035274;
    this.stones = this.ounces*0.0044643;
  }

  poundsConverter(event: any){
    this.pounds = event.target.value;
    this.kilograms = this.pounds/2.2046;
    this.ounces = this.pounds*16;
    this.grams = this.pounds/0.0022046;
    this.stones = this.pounds*0.071429;
  }

  gramsConverter(event: any){
    this.grams = event.target.value;
    this.kilograms = this.grams/1000;
    this.ounces = this.grams*0.035274;
    this.pounds = this.grams*0.0022046;
    this.stones = this.grams*0.00015747;
  }

  stonesConverter(event: any){
    this.stones = event.target.value;
    this.kilograms = this.stones/0.15747;
    this.grams = this.stones/0.00015747;
    this.ounces = this.stones*224;
    this.pounds = this.stones*14;
  }
  

}
