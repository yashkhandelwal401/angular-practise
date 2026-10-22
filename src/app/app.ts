import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  login=false
// show= false;

// block=1

// updateBlockVal(){
//   this.block++
// }

// toggle(){
//   this.show=!this.show;
// }

 loginToggle(){
  this.login=!this.login
 }
}