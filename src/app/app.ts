import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  task = " ";
  taskList: { id: number, name: string }[] = []

  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, name: this.task })
    
    console.log(this.taskList);

  }

  deleteTask(id: number) {
  this.taskList = this.taskList.filter(item => item.id !== id);
}
}

