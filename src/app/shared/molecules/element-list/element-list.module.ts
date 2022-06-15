import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementListComponent } from './element-list.component';


@NgModule({
  declarations: [ElementListComponent],
  imports: [
    CommonModule,
  ],exports:[
    ElementListComponent
  ]
})
export class ElementListModule { }
