import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabModule } from '../../atoms/tab/tab.module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    TabModule,
  ]
})
export class TabsModule { }
