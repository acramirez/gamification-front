import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';




@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ComponentsModule,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
