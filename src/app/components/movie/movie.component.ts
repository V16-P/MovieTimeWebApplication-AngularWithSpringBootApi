import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../commons/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

   public  movies:Movie[]=[];
   searchName :string='';

      constructor(private router:Router,private movieservice:MovieService,public activeRoute:ActivatedRoute){}
    
    
  
      ngOnInit(): void {
        this.activeRoute.paramMap.subscribe(()=>{
        this.getAllMovies()})
    
      }
  
      // bookTicket(movie: Movie) {
      //   // Navigate to a booking page or perform booking logic
      //   // this.router.navigate(['/ticket', movie.movieName]);
      //   this.router.navigate(['/ticket'], { queryParams: { id: movie.movieId, name: movie.movieName, price: movie.moviePrice } });

      // }

      bookTicket(movie: Movie) {
        alert(`Booking ticket for ${movie.movieName}`);

        this.router.navigate(['/ticket'], {
          queryParams: {
            movieId: movie.movieId,
            movieName: movie.movieName,
            moviePrice: movie.moviePrice,
          },
        });
      }
    
      
      getAllMovies() {

        const hassearchName:boolean = this.activeRoute.snapshot.paramMap.has("movieName");

        if(hassearchName){
          this.searchName=this.activeRoute.snapshot.paramMap.get('movieName') ||''
          // console.log(this.searchName)
          this.movieservice.getMoviesBySearchName(this.searchName).subscribe(data=>{
            console.log(data)
            this.movies=data
          })

        }else{
      this.movieservice.getAllMovies().subscribe((data :any) => {
          console.log(data);
          this.movies = data;
          data.sort((a:any,b:any)=>{
            return b.movieId - a.movieId
          })
        })
      }
      }
      

}
