import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { TicketServiceService } from '../../services/ticket-service.service';
import { MovieService } from '../../services/movie.service';
import { clear } from 'console';

@Component({
  selector: 'app-ticket-receipt',
  templateUrl: './ticket-receipt.component.html',
  styleUrls: ['./ticket-receipt.component.css']
})
export class TicketReceiptComponent implements OnInit {
  bookingId!: number;
  ticketDetails: any = {};
  movieDetails: any = {};
  booking: any = {};

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketServiceService,
    private bookingService: BookingService,
    private movieService: MovieService,
    private router:Router
  ) {}

  ngOnInit(): void {
    // Get bookingId from route parameters
    this.route.queryParams.subscribe((params) => {
      this.bookingId = +params['bookingId'];
      if (this.bookingId) {
        this.fetchBookingDetails();
      }
    });
  }

  fetchBookingDetails(): void {
    // Fetch booking details
    this.bookingService.getBookingById(this.bookingId).subscribe(
      (bookingData) => {
        this.booking = bookingData;

        // Fetch ticket details
        this.ticketService.getTicketById(this.booking.bookingTicketId).subscribe(
          (ticketData) => {
            this.ticketDetails = ticketData;
            this.ticketDetails.ticketTheaterLocation = ticketData.ticketTheaterLocation; 


            // Fetch movie details
            this.movieService.getMovieById(this.ticketDetails.ticketMovieId).subscribe(
              (movieData) => {
                this.movieDetails = movieData;
                this.ticketDetails.movieImage = this.movieDetails.movieImagePath;
                this.ticketDetails.movieName = this.movieDetails.movieName;
                this.ticketDetails.moviePrice = this.movieDetails.moviePrice;

              },
              (error) => console.error('Error fetching movie details:', error)
            );
          },
          (error) => console.error('Error fetching ticket details:', error)
        );
      },
      (error) => console.error('Error fetching booking details:', error)
    );
  }

  goHome(){
    this.router.navigate(['/home'])
  }
}
