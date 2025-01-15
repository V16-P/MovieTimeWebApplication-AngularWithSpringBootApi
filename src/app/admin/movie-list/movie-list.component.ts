import { Component, OnInit } from '@angular/core';
import { Movie } from '../../commons/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {


  public movies:Movie[]=[];

  constructor(private router:Router,private movieservice:MovieService,public activeRoute:ActivatedRoute){}



  

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
    this.getAllMovies()})

  }


  addMovieForm(): void {
    this.router.navigateByUrl("admin/movie-form")

  }



  updateMovie(movieId:number){
    console.log(movieId);
    this.router.navigateByUrl(`admin/movie-form/${movieId}`)

  }

  deleteMovie(movieId:number){
    if(confirm("Do you want to delete")){
      this.movieservice.deleteMovie(movieId).subscribe(data=>{
        console.log("Deleted")
        this.getAllMovies();
      })
    }
  }

  /*getAllMovies() {

    this.movieservice.getAllMovies().subscribe(data => {
      console.log(data);
      this.movies = data;
    })

  }*/

  getAllMovies() {
    this.movieservice.getAllMovies().subscribe((data: any) => {
      console.log(data);
      this.movies = data.sort((a: any, b: any) => b.movieId - a.movieId);
    });
  }
  


}
