import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../commons/movie';
import { map, Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { response } from 'express';

 interface GetMovieResponse{
  _embedded :{
    movies : Movie[]
  }
}

interface GetSearchByMoviename{
  _embedded :{
    movies : Movie[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieURL:string="http://localhost:8080/movie"


 constructor(private httpClient: HttpClient, private r:Router) {}

            //save movies into my sql
  saveMovie(movie: Movie):Observable<Movie>{
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.post<Movie>(this.movieURL,movie,httpOptions);
  }

           // getallMovies 
  getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<GetMovieResponse>(this.movieURL)
      .pipe(map(response=>response._embedded.movies));
      
  }

         //delecteMovie
  deleteMovie(movieId:number):Observable<Movie>{
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.delete<Movie>(this.movieURL+`/${movieId}`,httpOptions);
  }

  getMovieById(movieId:number):Observable<Movie>{
    const movieURL = this.movieURL+"/"+movieId;
    return this.httpClient.get<Movie>(movieURL);
  }

 /* getImageAndVideo(movieId: number): Observable<{ imagePath: string, videoPath: string }> {
    return this.httpClient.get<{ imagePath: string, videoPath: string }>(`${this.movieURL}/${movieId}/media`);
  }*/

  /*getMovieByImage(movieImagePath: string): Observable<Movie[]> {
      return this.httpClient.get<GetMovieResponse>(`${this.movieURL}?movieImagePath=${movieImagePath}`).pipe(map(response=>response._embedded.movies));
    }*/

  //updateMovie
  updateMovie(movie:Movie):Observable<Movie>{
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.put<Movie>(this.movieURL+`/${movie.movieId}`,movie,httpOptions);
  }
  
  //this using ticket recepit
  // GetMovieById(movieId: number): Observable<any> {
  //   return this.httpClient.get<any>(`${this.movieURL}/${movieId}`);
  // }

  getMoviesBySearchName(movieName: string): Observable<Movie[]> {
    const searchUrl="http://localhost:8080/movie/search/findByMovieName?movieName="+movieName
    return this.httpClient.get<GetSearchByMoviename>(searchUrl).pipe(map(response=>response._embedded.movies))
  }
  


}
