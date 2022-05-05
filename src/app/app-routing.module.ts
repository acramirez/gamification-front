import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { SsoGuard } from './shared/guards/sso.guard';


const routes:Routes=[
  {
    path:'',
    loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule),

  },
  {
    path:'not-found',
    component:PageNotFoundComponent
  },
  {
    path:'**',
    redirectTo:'not-found'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
