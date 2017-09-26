import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

interface SquareConfig {
  color: string;
  width?: number;
  readonly x: number;
  [propName: string]: any;
  readonly [index: number]: string;
}

interface SearchFunc {
  (source: string, subString: string): boolean;
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
