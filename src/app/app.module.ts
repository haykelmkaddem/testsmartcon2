import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardComponent } from './components/card/card.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { WhatWeDoComponent } from './pages/home/what-we-do/what-we-do.component';
import { CaseStudiesComponent } from './pages/home/case-studies/case-studies.component';
import { WhoAreWeComponent } from './pages/home/who-are-we/who-are-we.component';
import { PricingComponent } from './pages/home/pricing/pricing.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { WhoAreWe1Component } from './pages/who-are-we1/who-are-we1.component';
import { WhoAreWe2Component } from './pages/who-are-we2/who-are-we2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    WhatWeDoComponent,
    CaseStudiesComponent,
    WhoAreWeComponent,
    PricingComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    ProjectCardComponent,
    TeamCardComponent,
    CommentCardComponent,
    WhoAreWe1Component,
    WhoAreWe2Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
