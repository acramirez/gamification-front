import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChallengeLikeuComponent } from './challenge-likeu/challenge-likeu.component';
import { ButtonModule } from "@ngx-mxflame/atoms/button";
import { MessageComponent } from './message/message.component';
import { IconModule } from "@ngx-mxflame/atoms/icon";
import { FirstPageComponent } from './first-page/first-page.component';

// import { SpinnerModule } from '@ngx-mxflame/atoms/spinner';



@NgModule({
  declarations: [ChallengeLikeuComponent, MessageComponent, FirstPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ButtonModule,
    IconModule,
  ],
  exports:[ChallengeLikeuComponent]
})

export class PagesModule { }
