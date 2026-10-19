import { Component , effect , signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  // data = 100;
  count = signal(10);

  constructor(){
    effect( ()=>{

      console.log(this.count());

    })
  }

  updateValue(val:string){
    // this.data=200
    if(val=='dec'){
      this.count.set(this.count()-1)
    }else{
      this.count.set(this.count()+1)
    }
  }

}
