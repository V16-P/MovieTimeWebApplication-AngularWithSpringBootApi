import { Component } from '@angular/core';
import { Register } from '../../commons/register';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

public  user : Register = new Register(0,"","",+91 ,"","","","");

// public clr={green:false,red:false}

// public msg:string =""


constructor(public registerService:UserService, public router:Router){

}


onSubmit():void
{
  console.log(this.user);
  this.registerService.saveUser(this.user).subscribe(data=>{
    console.log(data)
    this.router.navigateByUrl("/login");
    window.alert("You Registered Successfully.! and Proceed to login");
},
error => {
  // Error: Registration failed
  console.error('Error during registration:', error);
  //  window.alert("Registration failed! Please try again.This email alrady used");


  if (error.status === 409 && error.error && error.error.message.includes('email')) {
    window.alert("Registration failed! This email is already used.");
  } else {
    window.alert("Registration failed! Please try again.");
  }


});
}

}
