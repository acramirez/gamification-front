import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";


import {
  DigitalBankDarkTheme,
  DigitalBankTheme,
  ThemeModule
} from '@ngx-mxflame/atoms/theme';
import { ErrorInterceptorService } from './services/interceptors/error-interceptor.service';
import { SsoInterceptorService } from './services/interceptors/sso-interceptor.service';
import { ErrorDialogModule } from './shared/atoms/error-dialog/error-dialog.module';


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
    PagesModule,
    
  ],
  providers: [
    {
      provide:  HTTP_INTERCEPTORS,
      useClass:SsoInterceptorService,
      multi:true
    },
    {
      provide:  HTTP_INTERCEPTORS,
      useClass:ErrorInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
