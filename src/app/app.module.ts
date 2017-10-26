import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
/*http拦截器*/
import { NoopInterceptor } from './js/httpInterceptor';
/*组件*/
import { LoginComponent } from './loginComponent/loginComp';
import { NavComponent } from './navComponent/navComp';
import { AppComponent } from './appComponent/appComp';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { PageNotFoundComponent } from './PageNotFound.component';
/*公共服务*/
import { HeroService } from './hero.service';
/*公用模块*/
import { AppRoutingModule } from './app-routing.module';
import { HttpData } from './js/httpMod';
import { commonDi , common } from './js/common';
import { appconfigDi, baseInfo } from './js/appconfig';
/*属性指令*/
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
    NavComponent,
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
      useClass: NoopInterceptor,
      multi: true,
    },
    {
      provide: baseInfo,
      useValue: appconfigDi,
    },
    {
      provide: commonDi,
      useValue: common,
    },
    HeroService,
    HttpData,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
