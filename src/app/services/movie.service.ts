import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  popular='https://api.themoviedb.org/3/movie/popular?api_key=7ab603f7fd8c4c10192cd9822304f83c&page=1'
  topRated='https://api.themoviedb.org/3/movie/top_rated?api_key=7ab603f7fd8c4c10192cd9822304f83c&page=1'
  latest='https://api.themoviedb.org/3/trending/all/day?api_key=7ab603f7fd8c4c10192cd9822304f83c'
  constructor(private http: HttpClient) { }

  getPopular():Observable<any>{
    return this.http.get<any>(this.popular)
  }

  getTopRated():Observable<any>{
    return this.http.get<any>(this.topRated)
  }

  getLatest():Observable<any>{
    return this.http.get<any>(this.latest)
  }


}
