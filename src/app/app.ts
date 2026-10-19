import { Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  // data = signal<number | string > (10)
  data:WritableSignal<number> = signal(10)
  count : Signal <number> = computed(()=>20)

  updateValue(){
    // this.data.set(true)
    this.data.update(val=> val+1)
  }
}
