import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../commons/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../services/movie.service'; // Import your MovieService
import { clear } from 'console';

@Component({
  selector: 'app-movie-moviedetails',
  templateUrl: './movie-moviedetails.component.html',
  styleUrls: ['./movie-moviedetails.component.css']
})
export class MovieMoviedetailsComponent implements OnInit {
  public movies: Movie[] = [];
  public movieDeatials: any = null;
  public movieDeatialsId: any;

  // public isButtonClicked: boolean = false; // Track button click state


  constructor(private active: ActivatedRoute, private movieservice: MovieService,private router:Router) {}

  ngOnInit(): void {
    // Get the movie ID from the route
    this.movieDeatialsId = Number(this.active.snapshot.paramMap.get('movieId'));

    // Call getAllMovies method to fetch movie data
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieservice.getAllMovies().subscribe(
      (data) => {
        console.log('Fetched movies:', data);
        this.movies = data;

        // Find movie details based on the ID
        this.movieDeatials = this.movies.find((item: any) => item.movieId === this.movieDeatialsId);
        console.log('Movie Details:', this.movieDeatials);
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }



  bookTicket(movieDeatials:Movie){
    this.router.navigate(['/ticket'], {
      queryParams: {
        movieId: movieDeatials.movieId,
        movieName: movieDeatials.movieName,
        moviePrice: movieDeatials.moviePrice,
      }
    })

   }

  goBack(){
    this.router.navigate(["/movie"])
    
  }
}
