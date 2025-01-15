import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../../commons/register';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrl: './adminnavbar.component.css'
})
export class AdminnavbarComponent {

  public  user : Register = new Register(0,"","",+91 ,"","","","");
  
    constructor(public r:Router){
  
    }
  
    ngOnInit(): void {
      if(!localStorage.getItem("userEmail")){
        this.r.navigate(['/login'])
      }
  
  this.user.userEmail = localStorage.getItem("userEmail") || ""; // Provide a fallback
      
    }
  
    logout(){
  
      this.r.navigate(['/login'])
      localStorage.clear()
  
  
    }
    movieList(){
       this.r.navigate(['admin/movie-list'])
    }

    // editMovie(){
    //   this.r.navigate(['admin/edi'])
    // }
  
   
  

}
