import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';
import { StatsComponent } from './stats/stats.component';
import { ListappeloffreComponent } from './listappeloffre/listappeloffre.component';
import { PaginateComponent } from './paginate/paginate.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ActuComponent } from './actu/actu.component';

const appRoutes: Routes = [
    {
      path:'', component: HomeComponent
    },
    {
      path:'dashboard', component: DashboardComponent
    },
    {
      path:'**', component:NotFoundComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    DashboardComponent,
    NavBarComponent,
    SliderComponent,
    StatsComponent,
    ListappeloffreComponent,
    PaginateComponent,
    FooterComponent,
    NewsletterComponent,
    ActuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
