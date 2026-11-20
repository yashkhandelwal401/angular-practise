import { Component } from '@angular/core';
import { Login } from './login/login';
import { Profile } from './profile/profile';

@Component({
  imports: [Login,Profile ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  
}