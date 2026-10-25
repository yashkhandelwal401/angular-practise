import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  constructor(private router: Router){}
  // goToProfile() {
  //   this.router.navigate(['profile'],{queryParams:{name:'Yash Khandu'}})
  // }
}
