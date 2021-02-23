import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';

import { AppComponent } from './app.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutComponent } from './components/about/about.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { MiniSliderComponent } from './mini-slider/mini-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    HomepageComponent,
    MenuComponent,
    FooterComponent,
    CategoryComponent,
    MovieComponent,
    MovieListComponent,
    SliderComponent,
    AboutComponent,
    AccordionComponent,
    MiniSliderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatBadgeModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
