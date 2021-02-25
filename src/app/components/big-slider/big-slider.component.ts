import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-big-slider',
  templateUrl: './big-slider.component.html',
  styleUrls: ['./big-slider.component.scss']
})
export class BigSliderComponent implements OnInit {
  imgUrl = 'https://image.tmdb.org/t/p/w500';
  topRatedList: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
   this.movieService.getTopRated().subscribe(data => {
     this.topRatedList = data.results;
   });
  }

  config = {
    loop: true,
    navigation: true,

    breakpoints: {
      320: {
        slidesPerView: 1
      },
      520: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      992: {
        slidesPerView: 1
      }
    }
  };
}
