import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeightComponent } from './components/weight/weight.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { LengthComponent } from './components/length/length.component';
import { SpeedComponent } from './components/speed/speed.component';
import { AppRoutingModule } from './routing/app-routing/app-routing.module';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightComponent,
    TemperatureComponent,
    LengthComponent,
    SpeedComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
