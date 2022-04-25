import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeLikeuComponent } from './challenge-likeu/challenge-likeu.component';
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
        path:'reto-likeu',
        component:FirstPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
