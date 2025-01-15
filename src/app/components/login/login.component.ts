import { Component } from '@angular/core';
import { Register } from '../../commons/register';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public  user : Register = new Register(0,"","",+91 ,"","","","");

 

  constructor(public router:Router, private userService:UserService){}

  

  // onSubmit(){
  //   const data=new FormData()


  //   if( this.user.userType=="Admin")
  //     {
  //     // this.router.navigateByUrl("/movie");//crud operations
  //     localStorage.setItem("userEmail",this.user.userEmail)  //dashboard e emai anedi storage avuthundi

      
  //       this.router.navigate(['/admin'])


  //     console.log("admin verified");
  //     window.alert("login in to admin successfull");
  //     }
  //     else if(this.user.userType=="User" )
  //     {
  //     this.router.navigateByUrl("/movie");//display code
  //     console.log("user verified");
  //     window.alert("login in to user successfull");
  //     }
  //     else
  //     {
  //     this.router.navigateByUrl("/login");
  //     window.alert("login Failed....Try Again!");
  //     }
  // }


  onSubmit(): void {
    // Check if the user is already logged in
    const storedUserEmail = localStorage.getItem("userEmail");
    if (storedUserEmail === this.user.userEmail) {
      window.alert("This user is already logged in.Go to Movies");
      this.router.navigate(['/movie'])
      return;
    }
  
    this.userService.getUserByEmail(this.user.userEmail).subscribe(
      (users) => {
        // Check if any users were returned
        if (users.length > 0) {
          const foundUser = users.find(u => u.userEmail === this.user.userEmail);
  
          if (foundUser) {
            // Check if the password matches
            if (foundUser.userPassword === this.user.userPassword) {
              // Check if the userType matches
              if (this.user.userType === foundUser.userType) {
                if (this.user.userType === "Admin") {
                  localStorage.setItem("userEmail", this.user.userEmail); // Admin email stored
                  this.router.navigate(['/admin']);
                  window.alert("Logged in as admin successfully.");
                } else if (this.user.userType === "User") {
                  localStorage.setItem("userEmail", this.user.userEmail); // User email stored
                  this.router.navigateByUrl("/movie");
                  window.alert("Logged in as user successfully.");
                }
              } else {
                window.alert("Login Failed! Incorrect user type.");
              }
            } else {
              window.alert("Login Failed! Incorrect password.");
            }
          } else {
            window.alert("Login Failed! No user found with that email.");
          }
        } else {
          window.alert("No users found.");
        }
      },
      (error) => {
        console.error('Error fetching user', error);
        window.alert("Login Failed! Please check your email or try again.");
      }
    );
  }
  
  

}
