import {Component,OnInit,} from '@angular/core';
import {Http} from '@angular/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs/Subject';
// import {json} from './json/user.json'
@Component({
  selector: 'dashboard',
  templateUrl:"./dashboard.html"
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

constructor(private http:Http) 
        {
            //console.log(">>friend.service.ts:constructor--")
            http.request('./app/json/user.json')
                    .subscribe(response => this.http = response.json());
    }



  users = [
      {name:'Amsterdam' ,last:'dinesh'},
      {name:'Albania', last:'8jjjj'},
      
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






}
