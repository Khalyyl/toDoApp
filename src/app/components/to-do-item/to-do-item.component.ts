import { Component, Input, Output,EventEmitter, Pipe, input } from '@angular/core';
import { TaskStatusPipe } from '../../task-status.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-to-do-item',
  standalone: true,
  imports: [FormsModule,CommonModule,TaskStatusPipe],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css'
})
export class ToDoItemComponent {

  @Input() task!: { text: string; completed: boolean };
  @Output() remove = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();  



  }



