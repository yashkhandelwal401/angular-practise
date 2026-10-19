import { Component, computed , signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  x = signal(20);
  y = signal(30);
  z = computed(()=> this.x() + this.y())

updateValue(){
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());
}
updateXValue(){
  this.x.set(1000);
}
}
