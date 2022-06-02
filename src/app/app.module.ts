import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";

import { ErrorInterceptorService } from './services/interceptors/error-interceptor.service';
import { MockInterceptorService } from './services/interceptors/mock-interceptor.service';
import { ConfigService } from './services/apis/config.service';


export function appConfigProvider(provider:ConfigService){
  return () => provider.getConfig();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    PagesModule,
    
  ],
  providers: [
    {
      provide:  HTTP_INTERCEPTORS,
      useClass:MockInterceptorService,
      multi:true
    },
    {
      provide:  HTTP_INTERCEPTORS,
      useClass:ErrorInterceptorService,
      multi:true
    },
    ConfigService,
    {
      provide:APP_INITIALIZER,
      useFactory:appConfigProvider,
      deps:[ConfigService],
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
