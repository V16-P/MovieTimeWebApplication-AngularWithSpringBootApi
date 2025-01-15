import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../commons/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit {
  public movie: Movie = new Movie(0, '', '', 120, 'Telugu', '', '', 'Action');
  public editable: boolean = false;

  

  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.loadMovieDetails();
    });
  }

  loadMovieDetails(): void {
    const movieId = +(this.activatedRoute.snapshot.paramMap.get('movieId') || 0);

    if (movieId > 0) {
      this.editable = true;
      this.movieService.getMovieById(movieId).subscribe({
        next: (data) => {
          this.movie = data;
          console.log('Movie details loaded:', this.movie);
        },
        error: (err) => {
          console.error('Error loading movie details:', err);
        },
      });
    }
  }

  onSubmit(): void {
    if (this.editable) {
      this.movieService.updateMovie(this.movie).subscribe({
        next: (data) => {
          console.log('Movie updated successfully:', data);
          alert('Movie update successfully added!');

          this.router.navigateByUrl('admin/movie-list');
        },
        error: (err) => {
          console.error('Error updating movie:', err);
        },
      })

    } else {
      this.movieService.saveMovie(this.movie).subscribe({
        next: (data) => {
          console.log('Movie added successfully:', data);
          alert('Movie successfully added!');
          this.router.navigateByUrl('admin/movie-list');
        },
        error: (err) => {
          console.error('Error adding movie:', err);
        },
      });
    }
  }
  cancel(){
    this.router.navigate(['admin/movie-list'])
  }
}
