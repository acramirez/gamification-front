import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

import {
  DigitalBankDarkTheme,
  DigitalBankTheme,
  ThemeModule
} from '@ngx-mxflame/atoms/theme';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    PagesModule,
    HttpClientModule,
    ThemeModule.forRoot({ 
      themes: [DigitalBankTheme, DigitalBankDarkTheme],
      active: 'theme--digitalbank-dark'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
