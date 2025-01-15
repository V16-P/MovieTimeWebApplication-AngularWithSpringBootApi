import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

const routes: Routes = [
  
  { path: '',
     component: AdminComponent
  },
  {
    path:"movie-list",
    component:MovieListComponent
  },
  {
    path:"movie-form",
    component:MovieFormComponent
  },
  { path: 'movie-form/:movieId', component: MovieFormComponent }, // Edit Movie

  
 
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
