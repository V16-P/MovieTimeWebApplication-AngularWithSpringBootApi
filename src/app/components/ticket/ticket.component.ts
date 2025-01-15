import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../../commons/ticket';
import { TicketServiceService } from '../../services/ticket-service.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
 public ticket: Ticket = new Ticket(0," ",0, new Date(),0,'', '',""); 
 public  tickets:Ticket[]=[];
   movieName!: string;
  moviePrice!: number;  
  movieId!: number;

  constructor(
    private ticketService: TicketServiceService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.movieName = params['movieName'];
      this.moviePrice = isNaN(Number(params['moviePrice'])) ? 0 : Number(params['moviePrice']);
      this.movieId = Number(params['movieId']);

      // Prefill ticket details
      this.ticket.ticketMovieName = this.movieName;
      this.ticket.ticketMovieId = this.movieId;
      this.ticket.ticketTotalPrice = this.calculateTotalPrice(); // Calculate initial price
    });
  }

  calculateTotalPrice(): number {
    //  ticketSeats is converted to a number before multiplication
    const seats = Number(this.ticket.ticketSeats);
    if (isNaN(seats)) {
      return 0;  // If ticketSeats is not a valid number, return 0
    }
    return seats * this.moviePrice;
  }

  saveTicket(): void {
    this.ticketService.saveTicket(this.ticket).subscribe(
      (data) => {
        console.log('Ticket saved:', data);
        alert('Ticket saved succesfully! Move to booking payment');
        this.router.navigate(['/booking'],{
          queryParams: {
            ticketId: data.ticketId,
            ticketTotalPrice: data.ticketTotalPrice
          }
        })
      },
      (error) => {
        console.error('Error saving ticket:', error);
        alert('Failed to book ticket.');
      }
    );
  }

  bookingpayment(){
    const confirmAction = window.confirm('Do you want to save the ticket?');
   if(confirmAction){
    this.saveTicket();
    this.router.navigate(['/booking'])
  }else{
   alert('Ticket saving cancelled!');

}
  }

  onSubmit(): void {
    //   Recalculate   total price  on form submission
    this.ticket.ticketTotalPrice = this.calculateTotalPrice(); 

      // Call the bookinpament    and  saveTicket method when the form is submitted
      this.bookingpayment()

  }


  // Method to handle changes in the number of seats
  onSeatsChange(): void {
    this.ticket.ticketTotalPrice = this.calculateTotalPrice();
  }

  cancelTicket(){
    this.router.navigate(['/movie'])

  }

  getAllTicket() {
    this.ticketService.getTickets().subscribe(data => {
        console.log(data);
        this.tickets = data;
      })
    }
  
}