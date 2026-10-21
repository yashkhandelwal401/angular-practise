import { Component , effect , signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  userName=signal ('anil');
  count=signal(0);
  displayHeading=false;

  constructor(){
    effect(()=>{
      if(this.count()==2){

        this.displayHeading=true 
        setTimeout(()=>{
  this.displayHeading=false;
        },2000)
      }else{
        this.displayHeading=false
      }
    }); 
  }  
}
