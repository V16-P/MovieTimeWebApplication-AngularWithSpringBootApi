import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../commons/booking';
import { map, Observable } from 'rxjs';

 interface GetBookingResponse{
  _embedded :{
    booking : Booking[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:8080/booking'; 

  constructor(private httpClient:HttpClient) { }

   saveBooking(booking: Booking): Observable<Booking> {
      return this.httpClient.post<Booking>(this.baseUrl, booking);
    }
  
    
    getBooking(): Observable<Booking[]> {
      return this.httpClient.get<GetBookingResponse>(this.baseUrl)
      .pipe(map(response=>response._embedded.booking));
    }

    getBookingById(bookingId: number): Observable<any> {
      return this.httpClient.get<any>(`${this.baseUrl}/${bookingId}`);
    }
}
