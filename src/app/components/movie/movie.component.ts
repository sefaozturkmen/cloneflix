import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  imgUrl = 'https://image.tmdb.org/t/p/w500'  
  movieList:any[]=[];

  constructor() { }

  ngOnInit(): void {
   
    
  }

}
