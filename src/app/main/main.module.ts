import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HireMeComponent } from './pages/hire-me/hire-me.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    HireMeComponent
  ],
  exports: [
    MainLayoutComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule
  ]
})
export class MainModule { }
