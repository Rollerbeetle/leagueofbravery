import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { RiotApiService } from './api/riot-api.service';
import { ChampionListModule } from './champion-list/champion-list.module';
import { ChampionDetailsModule } from './champion-details/champion-details.module';

import { AppComponent } from './app.component';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ChampionListComponent
      },
      {
        path: 'champion/:id',
        redirectTo: 'detail/:id'
      },
      {
        path: 'detail/:id',
        component: ChampionDetailsComponent
      }

    ]),
    ChampionListModule,
    ChampionDetailsModule
  ],
  providers: [
    RiotApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
