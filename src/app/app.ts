import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
   username="";

  getUserName(event: Event) {
    // this.username = (event.target as HTMLInputElement).value;    
  }
  setUserName(){
    this.username = "Peter"
  }
  getUserNameWithTemplate(val : string){
   this.username=val
  }
}