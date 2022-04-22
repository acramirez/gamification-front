import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChallengeLikeuComponent } from './challenge-likeu/challenge-likeu.component';
import { ButtonModule } from "@ngx-mxflame/atoms/button";
import { MessageComponent } from './message/message.component';
import { IconModule } from "@ngx-mxflame/atoms/icon";


@NgModule({
  declarations: [ChallengeLikeuComponent, MessageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ButtonModule,
    IconModule
  ],
  exports:[ChallengeLikeuComponent]
})

export class PagesModule { }
