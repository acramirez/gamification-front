import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsoGuard } from '../shared/guards/sso.guard';
import { ChallengeLikeuComponent } from './challenge-likeu/challenge-likeu.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:ChallengeLikeuComponent
      },
      {
        path:'message/:message',
        component:MessageComponent
      },
      {
        path:'bienvenido',
        component:FirstPageComponent
      }
    ],
    //  canLoad:[SsoGuard],
    //  canActivate:[SsoGuard],
  },
  {
    path:'error',
    component:ErrorPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
