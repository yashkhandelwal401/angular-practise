import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet, ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AngularLearning');
  name = new FormControl('anil');
  password = new FormControl('123');
  email = new FormControl();

  getValue(){
    console.log(this.name.value);
    console.log(this.password.value);
    console.log(this.email.value);
  }

  setValue(){
    this.name.setValue("peter")
    this.password.setValue("1234")
    this.email.setValue("preter@test.com")
  }
}
