import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  name = "Yash "
  // changeName(event:Event){
  //    const val= (event.target as HTMLInputElement).value;
  //    this.name=val;
  // }
}

