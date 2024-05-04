import {EnvironmentProviders} from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";

import {routes} from './app.routes';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

class NgbModule {
}

export const appConfig: { imports: (BrowserModule | HttpClientModule | RouterModule | FormsModule | NgbModule)[]; providers: EnvironmentProviders[] } = {
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    provideRouter(routes),
    provideHttpClient(),
  ]
};
