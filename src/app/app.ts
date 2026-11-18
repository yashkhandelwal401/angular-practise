import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'Code Step by Step';
  name = 'Yash Khandelwal';

  hello() {
    let x = 20;
    const y = 40;
    var data = 30;
  }
}