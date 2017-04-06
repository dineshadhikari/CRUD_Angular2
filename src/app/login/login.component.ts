import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
constructor(private router: Router) { }

email_validation:boolean;
pass_validation:boolean;
email:string;
pass:string;


submit(){
  // alert(""+this.email +" "+ this.pass); 

if(this.pass || this.email){
  if(this.email=="adhikari"){
    this.email_validation = false;
  }
  else{
    this.email_validation = true;
  }

  if(this.pass=="welcome@123"){
    this.pass_validation = false;
  }
  else{
    this.pass_validation = true;
  }
  if(this.email=="adhikari" && this.pass=="welcome@123"){
    this.router.navigateByUrl('/dashboard');
  }
}

else{
  this.pass_validation = true;
  this.email_validation = true;
}


}
// if(this.pass=="welcome@123" && this.email=="adhikari"){
 
// this.router.navigateByUrl('/dashboard');
// }
// else{

// this.pass_validation = true;
// }

// else{
// this.pass_validation = true;
// }
}