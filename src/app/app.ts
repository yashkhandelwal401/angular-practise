import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-practise');

  handleEvent(event:Event){
    console.log("function called",event.type);
    console.log("function called",(event.target as HTMLInputElement).className);
  }
}
