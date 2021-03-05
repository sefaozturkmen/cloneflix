import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  
  movie:any;
  imgUrl = 'https://image.tmdb.org/t/p/w500' 
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private movieService:MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getMovieById(params["movieId"])
    })
  }

  getMovieById(movieId:any){
    this.movieService.getMovieById(movieId).subscribe(data =>{
      this.movie =  data;
    })
  }
}
