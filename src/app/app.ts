import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  count: number = 0;

handleCounter(val: string) {
if (val === 'minus') {
this.count = this.count - 1;
} else if (val === 'plus') {
this.count = this.count + 1;
} else {
this.count = 0;
}
}
}