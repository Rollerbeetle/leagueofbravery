import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MasteryComponent } from './mastery.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    MasteryComponent
  ],
  declarations: [MasteryComponent]
})
export class MasteryModule { }
