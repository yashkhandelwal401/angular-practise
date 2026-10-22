import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  students = ["Robert", "Henry", "Elizabeth", "Katy", "Donald"];

  studentData = [{
    name: 'Yash',
    age: 43,
    email: 'yash@gmail.com'
  },
  {
    name: 'Robert',
    age: 10,
    email: 'Robert@gmail.com'
  },
  {
    name: 'Donald',
    age: 32,
    email: 'Donald@gmail.com'
  },
  {
    name: 'Water',
    age: 35,
    email: 'Water@gmail.com'
  },
  {
    name: 'Flower',
    age: 39,
    email: 'Flower@gmail.com'
  }
  ]
}