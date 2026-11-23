import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  name: string = "Sidhu"
  data: number | string = 30;
  userLogin: boolean = true
  info: any = "this is some data"
  email = "anc@test.com"

  apple() {
    this.data = "abc"
    this.info = 100
    ///
    this.info = true
    //
    this.info = []
  }
  sum(a: number , b: number){
    console.log(a+b);
  }
}