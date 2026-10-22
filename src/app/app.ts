import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
color="red" 

changeColor(color:string){
  this.color = color
}
}