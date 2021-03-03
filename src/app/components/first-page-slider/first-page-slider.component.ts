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
  selector: 'app-first-page-slider',
  templateUrl: './first-page-slider.component.html',
  styleUrls: ['./first-page-slider.component.scss']
})
export class FirstPageSliderComponent implements OnInit {
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
        slidesPerView: 2
      },
      520: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      }
    }
  };
}