import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';


import { MiniSliderComponent } from './components/mini-slider/mini-slider.component';
import { LoginComponent } from './components/login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login.guard';



import { AboutComponent } from './components/about/about.component';
import { AccordionComponent } from './components/accordion/accordion.component';
;
import { BigSliderComponent } from './components/big-slider/big-slider.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FirstPageSliderComponent } from './components/first-page-slider/first-page-slider.component';
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
    MiniSliderComponent,
    LoginComponent,
    AboutComponent,
    AccordionComponent,
    BigSliderComponent,
    MovieDetailComponent,
    FirstPageSliderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    HttpClientModule,

    
    MatBadgeModule,
    ReactiveFormsModule,
    FormsModule,
    

    
    MatBadgeModule

    
  ],
  providers: [AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
