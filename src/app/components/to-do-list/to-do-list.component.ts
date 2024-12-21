import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [FormsModule,ToDoItemComponent,CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {

  tasks : { text:string; completed: boolean}[] =[
    { text: 'Task 1 : We need to learn DevOps', completed: false },
    { text: 'Task 2 : We need to learn SpringBoot', completed: false },
    { text: 'Task 3 : We need to learn Angular', completed: true }

  ]

  newTask: string = '';

  addTask():void{
    if(this.newTask.trim()){
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  toggleCompletion(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  

}
