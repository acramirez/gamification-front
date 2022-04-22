import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeLikeuComponent } from './challenge-likeu/challenge-likeu.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
