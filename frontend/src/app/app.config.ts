import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';


export const appConfig: ApplicationConfig = {
  providers: 
  [provideRouter(routes), 
    provideHttpClient(),
  { provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LeF0LwpAAAAAPV1jwHcK1gmIOYHjQb3DZC028rF" }] 
}