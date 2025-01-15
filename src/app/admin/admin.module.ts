import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { MovieFormComponent } from './movie-form/movie-form.component';


@NgModule({
  declarations: [
    AdminComponent,
    MovieListComponent,
    AdminnavbarComponent,
    MovieFormComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
