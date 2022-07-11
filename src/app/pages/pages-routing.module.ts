import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorGuard } from '../shared/guards/error.guard';
import { ChallengeLikeuComponent } from './challenge-likeu/challenge-likeu.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:ChallengeLikeuComponent
      },
      {
        path:'**',
        redirectTo:'error'
      }
    ],
    // canLoad:[SsoGuard],
    // canActivate:[SsoGuard],
  },
  {
    path:'error',
    component:ErrorPageComponent,
    canActivate:[ErrorGuard],
    canLoad:[ErrorGuard]
  },
  {
    path:'**',
    redirectTo:'error'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
