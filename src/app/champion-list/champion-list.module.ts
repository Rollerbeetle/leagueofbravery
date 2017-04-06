import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChampionListComponent } from './champion-list.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    ChampionListComponent
  ],
  declarations: [ChampionListComponent]
})
export class ChampionListModule { }
