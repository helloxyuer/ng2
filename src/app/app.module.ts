import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { SetHeaderInterceptor } from './js/httpInterceptor';

import { LoginComponent } from './loginComponent/loginComp';
import { AppComponent } from './appComponent/appComp';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { PageNotFoundComponent } from './PageNotFound.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

import { PhoneInputDirective } from './directive/phoneInput';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    LoginComponent,
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    PageNotFoundComponent,
    PhoneInputDirective
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetHeaderInterceptor,
      multi: true,
    },
    SetHeaderInterceptor,
    HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
