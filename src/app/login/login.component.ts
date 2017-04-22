import { Component, HostBinding, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http'
import { Router, ActivatedRoute } from '@angular/router';
import {  AuthenticationService } from '../services/index';
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
constructor(private router: Router, private http: Http) { }

email_validation:boolean;
pass_validation:boolean;
email:string;
pass:string;

staging_url:string = "192.168.1.16/api/login"

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


this.http.post(this.staging_url,{
  user:{
    email:this.email,
    password:this.pass
  }
},

);







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