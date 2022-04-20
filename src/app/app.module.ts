import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";

import { HttpErrorsInterceptor } from './services/interceptors/http.error.interceptor';

import {
  DigitalBankDarkTheme,
  DigitalBankTheme,
  ThemeModule
} from '@ngx-mxflame/atoms/theme';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ThemeModule.forRoot({ 
      themes: [DigitalBankTheme, DigitalBankDarkTheme],
      active: 'theme--digitalbank-dark'
    }),
    PagesModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorsInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
