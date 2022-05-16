import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChallengeLikeuComponent } from './challenge-likeu/challenge-likeu.component';
import { MessageComponent } from './message/message.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { DirectivesModule } from '../shared/directives/directives.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorDialogModule } from '../shared/atoms/error-dialog/error-dialog.module';

// import { SpinnerModule } from '@ngx-mxflame/atoms/spinner';



@NgModule({
  declarations: [ChallengeLikeuComponent, MessageComponent, FirstPageComponent, ErrorPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    DirectivesModule,
    ErrorDialogModule
    
  ],
  exports:[ChallengeLikeuComponent]
})

export class PagesModule { }
