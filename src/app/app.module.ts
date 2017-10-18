import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    HttpModule,
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
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
