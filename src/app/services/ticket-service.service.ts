import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Ticket } from '../commons/ticket';
import { response } from 'express';

interface GetTicketResponse{
  _embedded :{
    ticket : Ticket[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  private ticketUrl = 'http://localhost:8080/ticket'; 

  constructor(private httpClient: HttpClient) {}

  
  
  saveTicket(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>(`${this.ticketUrl}`, ticket);
  }

  
  getTickets(): Observable<Ticket[]> {
    return this.httpClient.get<GetTicketResponse>(`${this.ticketUrl}`).pipe(map(response=>response._embedded.ticket));
  }

  getTicketById(ticketId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.ticketUrl}/${ticketId}`);
  }
  
 
}
