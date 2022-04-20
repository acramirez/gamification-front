import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChallengeLikeuComponent } from './challenge-likeu/challenge-likeu.component';
import { ButtonModule } from "@ngx-mxflame/atoms/button";


@NgModule({
  declarations: [ChallengeLikeuComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ButtonModule
  ],
  exports:[ChallengeLikeuComponent]
})

export class PagesModule { }
