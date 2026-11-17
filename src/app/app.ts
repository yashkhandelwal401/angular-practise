import { Component, signal } from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  profileForm= new FormGroup({
    name:new FormControl('anil'),
    password:new FormControl('1234'),
    email:new FormControl('Yash@gmail.com')
  });

  submitData(){
    console.log(this.profileForm.value);
  }
  setValues(){
    this.profileForm.setValue({
      name:'peter',
      password:"321@123",
      email:"peter"
    });
  }
}
