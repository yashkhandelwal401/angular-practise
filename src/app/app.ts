import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
color = "green";
fontSizeNormal="30px"
fontSizeBig="60px"
size=30

zoom=false;
zoomToggle(){
  this.zoom=!this.zoom;
}
}
 
