import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPortfolioComponent } from './components/my-portfolio/my-portfolio.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyResumeComponent } from './components/my-resume/my-resume.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { MyPortfolioNavComponent } from './components/my-portfolio/my-portfolio-nav/my-portfolio-nav.component';
import { MyPortfolioItemComponent } from './components/my-portfolio/my-portfolio-item/my-portfolio-item.component';
import { MyPortfolioContainerComponent } from './components/my-portfolio/my-portfolio-container/my-portfolio-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPortfolioComponent,
    AboutMeComponent,
    MyResumeComponent,
    FooterComponent,
    HeaderComponent,
    MyServicesComponent,
    HeroSectionComponent,
    MyPortfolioNavComponent,
    MyPortfolioItemComponent,
    MyPortfolioContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
