import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  popular='https://api.themoviedb.org/3/movie/popular'
  topRated='https://api.themoviedb.org/3/movie/top_rated'
  latest='https://api.themoviedb.org/3/trending/all/day'
  
  path='https://api.themoviedb.org/3/movie/'
  key='?api_key=7ab603f7fd8c4c10192cd9822304f83c'
  constructor(private http: HttpClient) { }

  getPopular():Observable<any>{
    return this.http.get<any>(this.popular+this.key)
  }

  getTopRated():Observable<any>{
    return this.http.get<any>(this.topRated+this.key)
  }

  getLatest():Observable<any>{
    return this.http.get<any>(this.latest+this.key)
  }

  getMovieById(movieId:any):Observable<any>{
    return this.http.get<any>(this.path+movieId+this.key)
  }
}
