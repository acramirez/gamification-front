import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {
    path:'',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'challenge-like-u',
    loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule),
  },
  {
    path:'**',
    redirectTo:'error/1'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
