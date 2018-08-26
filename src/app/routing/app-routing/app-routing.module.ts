import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LengthComponent } from '../../components/length/length.component';
import { SpeedComponent } from '../../components/speed/speed.component';
import { TemperatureComponent } from '../../components/temperature/temperature.component';
import { WeightComponent } from '../../components/weight/weight.component';


const routes: Routes = [
  { path: 'lengthComponent', component: LengthComponent },
  { path: 'speedComponent', component: SpeedComponent},
  { path: 'temperatureComponent', component: TemperatureComponent },
  { path: 'weightComponent', component: WeightComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],

  exports: [
    RouterModule,
  ],
  
  declarations: []
})
export class AppRoutingModule { }
