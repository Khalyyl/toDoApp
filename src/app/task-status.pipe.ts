import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskStatus',
  standalone: true
})
export class TaskStatusPipe implements PipeTransform {
  transform(taskText: string, isCompleted: boolean): string {
    return isCompleted ? `[TERMINÉ] ${taskText}` : `[EN COURS] ${taskText}`;
  }
}
