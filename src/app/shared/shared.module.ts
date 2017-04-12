import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
  ],
  providers: [
  ]
})
export class SharedModule { }
