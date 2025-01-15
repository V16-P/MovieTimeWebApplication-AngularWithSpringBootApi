import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  public navbar:any[]=[
    {
      name:"HOME",
      url:"/home",
      sub:[] 
    },
      {
        name:"MOVIE",
        url:"/movie",
        sub:[]
        
      },
      {
        name:"ABOUT",
        url:"/about",
        sub:[]
  
      },
      {
        name:"CONTACT",
        url:"/contact",
        sub:[]
  
      },
      {
        name:"ADMIN",
        url:"/admin",
        sub:[]
  
      },
      
    
  ]


  constructor(public r:Router){}
  
  searchName:string=''

  ngOnInit(): void {
  }

  logout(){
  
    this.r.navigate(['/home'])
    localStorage.clear()


  }
  searchMovies(){

    this.r.navigateByUrl("/search/"+this.searchName)

  }


}
