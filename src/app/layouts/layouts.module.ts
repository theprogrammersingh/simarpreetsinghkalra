import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  exports: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
