import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  name:string|null="";
  id:string|null="";
  constructor(private route:ActivatedRoute ){

  }
  ngOnInit() {
  this.route.params.subscribe((params) => {
    this.name=params['name']
    this.id=params['id']
      });
  }
}