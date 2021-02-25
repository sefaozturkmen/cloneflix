import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-mini-slider',
  templateUrl: './mini-slider.component.html',
  styleUrls: ['./mini-slider.component.scss']
})
export class MiniSliderComponent implements OnInit {

  imgUrl = 'https://image.tmdb.org/t/p/w500'  
  popularList:any[]=[];
  topRatedList:any[]=[];
  latestList:any[]=[];

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopular().subscribe(data =>{
      this.popularList = data.results;
    })
    this.movieService.getTopRated().subscribe(data =>{
      this.topRatedList = data.results;
    })
    this.movieService.getLatest().subscribe(data =>{
      this.latestList = data.results;
    })
  }

  
  config = {
    loop: true,
    navigation: true,
    
    breakpoints: {
      320:{
        slidesPerView:1
      },
      520:{
        slidesPerView: 2
      },
      768:{
        slidesPerView: 3
      } , 
      992: {
            slidesPerView: 5
        }
    }
  };

}
