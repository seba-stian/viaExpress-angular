import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

import { registerLocaleData } from '@angular/common';
import localeEsCL from '@angular/common/locales/es-CL';
import { LOCALE_ID } from '@angular/core';

// Registra el locale
registerLocaleData(localeEsCL, 'es-CL');


bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
    ...(appConfig.providers || []),
    provideAnimations(),
    { provide: LOCALE_ID, useValue: 'es-CL' }
    ]
}).catch((err) => console.error(err));

// ...appConfig: incluye todas tus configuraciones existentes (por ejemplo, rutas, servicios de Flowbite,
// providers: [...(appConfig.providers || []), provideAnimations()]: toma tus proveedores existentes y agrega provideAnimations() sin sobreescribir.