import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { RiotApiService } from './api/riot-api.service';
import { ChampionListModule } from './champion-list/champion-list.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ChampionListModule
  ],
  providers: [
    RiotApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
