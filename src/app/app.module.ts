import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { RiotApiService } from './api/riot-api.service';
import { ChampionListModule } from './champion-list/champion-list.module';
import { ChampionDetailsModule } from './champion-details/champion-details.module';
import { MasteryModule } from './mastery/mastery.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ChampionListModule,
    ChampionDetailsModule,
    MasteryModule,
    AppRoutingModule,
  ],
  providers: [
    RiotApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
