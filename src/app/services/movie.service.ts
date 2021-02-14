import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  path='https://api.themoviedb.org/3/movie/popular?api_key=7ab603f7fd8c4c10192cd9822304f83c&page=1'

  constructor(private http: HttpClient) { }

  getMovie():Observable<any>{
    return this.http.get<any>(this.path)
  }
}