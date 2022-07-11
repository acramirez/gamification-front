import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {
    path:'',
    loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule),

  },
  {
    path:'**',
    redirectTo:'error'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
