import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  users=[
    {
      id:'1',
      name:'Anil',
      age:28,      
    },
    {
      id:'2',
      name:'sam',
      age:29,      
    },
    {
      id:'3',
      name:'bruce',
      age:30,      
    },
    {
      id:'4',
      name:'peter',
      age:28,      
    },
    {
      id:'5',
      name:'tony',
      age:28,      
    }
  ]
}
