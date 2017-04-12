import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChampionDetailsComponent } from './champion-details.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ChampionDetailsComponent
  ],
  declarations: [ChampionDetailsComponent]
})
export class ChampionDetailsModule { }
