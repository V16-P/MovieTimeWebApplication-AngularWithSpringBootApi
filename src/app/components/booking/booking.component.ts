import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { TicketServiceService } from '../../services/ticket-service.service';
import { Booking } from '../../commons/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
     booking: Booking = new Booking(0, '', 0, 0);

 public bookings:Booking[]=[]

  ticketId!: number;
  ticketTotalPrice!: number;

  constructor(
    private bookingService: BookingService,
    private ticketService: TicketServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the ticketId and ticketTotalPrice from queryParams
    this.route.queryParams.subscribe((params) => {
      this.ticketId = params['ticketId'];
      this.ticketTotalPrice = params['ticketTotalPrice'];
    });
  }

  pay(): void {
    const cancelConfirmation = window.confirm('Are you sure you want to proceed with the payment?');
    if (cancelConfirmation) {
    this.booking.bookingTicketId = this.ticketId; // Assign ticketId to booking
    this.booking.bookingTotalAmount = this.ticketTotalPrice; // Assign ticketTotalPrice to booking

    // Save booking and navigate
    this.bookingService.saveBooking(this.booking).subscribe(
      (data) => {
        console.log('Booking saved:', data);
        alert('Payment successful!');
        this.router.navigate(['/ticket-receipt'], {
          queryParams: { bookingId: data.bookingId },
        });
      },
      (error) => {
        console.error('Error saving booking:', error);
        alert('Payment failed!');
      }
    );
   } else{
    alert('Payment cancelled!');
        this.router.navigate(['/movie'])
   }
   
  }

  GetAllBooking(){
    this.bookingService.getBooking().subscribe(data => {
      console.log(data);
      this.bookings = data;
    })

  }
}
