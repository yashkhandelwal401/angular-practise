import { Component } from '@angular/core';
import { Profile } from './profile/profile';
import { User } from './user/user';

@Component({
  imports: [Profile,User],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {

}