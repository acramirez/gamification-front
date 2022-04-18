import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from "@ngx-mxflame/atoms/icon";
import { ElementListComponent } from './element-list.component';


@NgModule({
  declarations: [ElementListComponent],
  imports: [
    CommonModule,
    IconModule
  ],exports:[
    ElementListComponent
  ]
})
export class ElementListModule { }
