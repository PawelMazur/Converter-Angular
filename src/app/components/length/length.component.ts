import { Component, OnInit } from '@angular/core';
import { LengthService } from '../../services/length.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent implements OnInit {

  m: number;
  cm: number;
  km: number;
  feed: number;
  inches: number;
  yards: number;
  miles: number;


  constructor(
    private messageService : MessageService,
    private lengthService: LengthService) { }

  ngOnInit() {

  }

  
  meterConverter(event: any){
    this.m = event.target.value;
    this.cm = this.m * 100;
    this.km = this.m * 0.001;
    this.feed = this.m * 3.2808;
    this.inches = this.m * 39.370;
    this.yards = this.m * 1.0936;
    this.miles = this.m * 0.00062137;
  }

  cmConverter(event: any){
    this.cm = event.target.value;
    this.m = this.cm * 0.01;
    this.km = this.cm * 0.00001;
    this.feed = this.cm *0.032808 ;
    this.inches = this.cm * 0.39370;
    this.yards = this.cm * 0.010936;
    this.miles = this.cm * 0.0000062137;
  }

  kmConverter(event: any){
    this.km = event.target.value;
    this.m = this.km * 1000;
    this.cm = this.km * 100000;
    this.feed = this.km * 3280.8;
    this.inches = this.km * 39370;
    this.yards = this.km * 1093.6;
    this.miles = this.km *0.62137;
  }

  feedConverter(event: any){
    this.feed = event.target.value;
    this.m = this.feed / 3.2808;
    this.cm = this.feed / 0.032808;
    this.km = this.feed /3280.8;
    this.inches = this.feed * 12;
    this.yards = this.feed * 0.33333;
    this.miles = this.feed *0.00018939;
  }

  inchesConverter(event: any){
    this.inches = event.target.value;
    this.m = this.inches /39.370;
    this.cm = this.inches /0.39370;
    this.km =this.inches /39370;
    this.feed = this.inches *0.083333;
    this.yards = this.inches *0.027778;
    this.miles = this.inches *0.000015783;
  }

  yardConverter(event: any){
    this.yards = event.target.value;
    this.cm = this.yards /0.010936;
    this.m = this.yards /1.0936 ;
    this.km = this.yards /1093.6;
    this.feed = this.yards *3;
    this.inches = this.yards *36;
    this.miles = this.yards *0.00056818;
  }

  milesConverter(event: any){
    this.miles = event.target.value;
    this.cm = this.miles /0.0000062137;
    this.m = this.miles / 0.00062137;
    this.km = this.miles / 0.62137;
    this.feed = this.miles * 5280;
    this.inches = this.miles * 63360;
    this.yards = this.miles * 1760;
  }

}
