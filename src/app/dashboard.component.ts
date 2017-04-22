import {Component,OnInit, ViewChildren, ViewChild, HostListener, Input, Directive, ElementRef} from '@angular/core';
import{Renderer} from '@angular/core'
import {Http} from '@angular/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs/Subject';
// import {json} from './json/user.json'
@Component({
  selector: 'dashboard',
  templateUrl:"./dashboard.html",
  styleUrls: ['./app.component.css']
})
export class dashboardComponent { 
  private _success = new Subject<string>();
  staticAlertClosed = true;
  successMessage: string;

        // constructor(private http:Http){
        //   http.get('user.json')

        //   this.result = {users:[]};
        // http.get('./json/user.json').map((res: Response) => res.json()).subscribe(res => this.result = res);
            
        // ];
        // }

// constructor(private http:Http){
// this.http.get('app/json/user.json').subscribe(response=>{
//   console.log("data",JSON.stringify(response));
// })
// }
@ViewChildren('passcode1') pass1;
@ViewChildren('passcode2') pass2;
@ViewChildren('passcode3') pass3;

constructor(private http:Http) 



        {
            //console.log(">>friend.service.ts:constructor--")
            // http.request('./app/json/user.json')
            //         .subscribe(response => this.http = response.json());
    }



  users = [
      {name:'Amsterdam' ,last:'dinesh'},
      {name:'Albania', last:'8jjjj'},
      {name:'Pak'},
  ];
        
addMsg:string;
alertMessage:string;
add(){
   
  if(this.addMsg){
    this.users.push({name:this.addMsg ,last:null});
    setTimeout(() => this.successMessage = null, 2000);
  this.successMessage="Welcome " +  this.addMsg ;
}
else{
  setTimeout(() => this.alertMessage = null, 2000);
this.alertMessage="plz enter ur name"
}
}

close(ID){
  console.log("helloo" + ID);
  this.users.splice(ID,1);
}



boys = [
    {
      "id": 0,
      "name": "Adam Carter",
      "work": "Unilogic",
      "email": "adam.carter@unilogic.com",
      "dob": "1978",
      "address": "83 Warner Street",
      "city": "Boston",
      "optedin": true
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "13/05/1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    }
  ]
  images = [
    "img0.png",
    "img1.png",
    "img2.png"
  ]
  coordinates: {
  	"x": 35.12,
  	"y": -21.49
  }
  price = "$59,395"







// passcode1(){
//   // alert("hiii");
// this.pass1.pass2.setFocus();
// }


// myFocusVar: boolean = false


    // @HostListener('focus', ['$event.target'])
    //   onFocus(target) {
    //     console.log("Focus called");
    //     target.type = 'date';
    //   }
    // @HostListener('focusout', ['$event.target'])
    // onFocusout(target) {
    //   console.log("Focus out called");
    //   target.type = 'text';
    // }



// focusOutFunction(){
//    console.log("Focus out called");
//  }
//  focusFunction(){
//    console.log("Focus called");
//  }




}
