import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieComponent } from './components/movie/movie.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeMoviedetailsComponent } from './components/home/home-moviedetails/home-moviedetails.component';
import { MovieMoviedetailsComponent } from './components/movie/movie-moviedetails/movie-moviedetails.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { BookingComponent } from './components/booking/booking.component';
import { TicketReceiptComponent } from './components/ticket-receipt/ticket-receipt.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    MovieComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    HomeMoviedetailsComponent,
    MovieMoviedetailsComponent,
    TicketComponent,
    BookingComponent,
    TicketReceiptComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
