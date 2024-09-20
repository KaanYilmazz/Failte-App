import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { jwtInterceptor, serverErrorInterceptor } from '@lib/interceptors';
import { provideSpinnerConfig } from 'ngx-spinner';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withComponentInputBinding()),
        provideHttpClient(withInterceptors([serverErrorInterceptor, jwtInterceptor])),
        provideToastr(),
        provideSpinnerConfig({type: 'ball-climbing-dot'})
    ],
};
