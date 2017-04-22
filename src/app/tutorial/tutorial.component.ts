import { Component} from '@angular/core';


@Component({
selector: 'tutorial',
templateUrl: './tutorial.component.html',
styles:['.my_class{color:red;} '],
styleUrls: ['./tutorial.scss'],
})


export class TutorialComponent {
    
 hey="This Interpolation";

applyClass = false;
applystyle = true;


onClick(value){
  console.log(value)
}



showElement=false;
color="red"
colors=[
  'red','pink', 'green', 'black', 
];



cone=true;
ctwo=true;
ss=true;
clickme(){
  this.ss=!this.ss;
  // this.ctwo=!this.ctwo;
}
// isActive = true;






name='TheJoatmon'




nn="Adhikari";

onSubmit(value:any){

console.log(value);

}






}



