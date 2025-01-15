import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeMoviedetailsComponent } from './components/home/home-moviedetails/home-moviedetails.component';
import { MovieMoviedetailsComponent } from './components/movie/movie-moviedetails/movie-moviedetails.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { BookingComponent } from './components/booking/booking.component';
import { TicketReceiptComponent } from './components/ticket-receipt/ticket-receipt.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  }
  ,
  {
    path:"",
    component:HomeComponent
  }
  ,
  {
    path:"home",
    component:HomeComponent
  },
  { path:"home/home-moviedetails/:movieId",
    component:HomeMoviedetailsComponent
  }
  ,
  {
    path:"movie",
    component:MovieComponent
  },
  { path:"movie/movie-moviedetails/:movieId",
    component:MovieMoviedetailsComponent
  },
  {
    path:"search/:movieName",
    component:MovieComponent
  }
  ,
  {
    path:"about",
    component:AboutComponent
  }
  ,
  {
    path:"contact",
    component:ContactComponent
  }
  ,
  {
    path:"register",
    component:RegisterComponent
  }
  ,
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"ticket",
    component:TicketComponent
  },
    { path: 'ticket/:movieName',
      component: TicketComponent }, 
  
  {
    path:"booking",
    component:BookingComponent
  },
  {
    path:"ticket-receipt",
    component:TicketReceiptComponent
  },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  { path: '', redirectTo: '/admin/movie-list', pathMatch: 'full' },

  
  {
    path:"**",
    component:PagenotfoundComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
