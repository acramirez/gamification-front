import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorGuard } from '../shared/guards/error.guard';
import { MessageGuard } from '../shared/guards/message.guard';
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
        path:'bienvenido',
        component:FirstPageComponent
      }
    ],
    // canLoad:[SsoGuard],
    // canActivate:[SsoGuard],
  },
  {
    path:'notificacion/:message',
    component:MessageComponent,
    canActivate:[MessageGuard],
    canLoad:[MessageGuard]
  },
  {
    path:'error',
    component:ErrorPageComponent,
    canActivate:[ErrorGuard],
    canLoad:[ErrorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
