
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { MarkdownModule } from 'ngx-markdown';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
}),
    UiModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgxGoogleAnalyticsModule.forRoot('UA-175438274-1'),
    NgxGoogleAnalyticsRouterModule,
    LoadingBarRouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
