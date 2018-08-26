import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { SpeedService } from '../../services/speed.service';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private speedService : SpeedService,
    
  ) { }

  MPH: number;
  KPH: number;
  knots: number;
  mach: number;

  ngOnInit() {

  }

  MPHConverter(event: any){
    this.MPH = event.target.value;
    this.KPH = this.MPH *1.609344;
    this.knots = this.MPH/1.150779;
    this.mach = this.MPH/761.207;   
  }

  KPHConverter(event: any){
    this.KPH = event.target.value;
    this.MPH = this.KPH/1.609344;
    this.knots = this.KPH/1.852; 
    this.mach = this.KPH/1225.044;
  }

  knotsConverter(event: any){
    this.knots = event.target.value;
    this.MPH = this.knots*1.150779;
    this.KPH = this.knots*1.852;
    this.mach = this.knots/661.4708;
  }

  machConverter(event: any){
    this.mach = event.target.value;
    this.MPH = this.mach*761.207;
    this.KPH = this.mach*1225.044;
    this.knots = this.mach*1225.044;
  }

  
}
