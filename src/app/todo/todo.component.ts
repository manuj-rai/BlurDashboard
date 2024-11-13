import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,  // Mark this component as standalone
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [CommonModule, FormsModule]  // Import CommonModule here for ngIf, ngFor, etc.
})
export class TodoComponent {
  todoItems: { task: string, done: boolean }[] = [
    { task: 'Complete the dashboard layout', done: false },
    { task: 'Fix the table pagination', done: false },
    { task: 'Add new widgets', done: false },
    { task: 'Update chart component', done: false }
  ];

  newTodo: string = '';

  toggleTodoStatus(index: number) {
    this.todoItems[index].done = !this.todoItems[index].done;
  }

  addTodo() {
  if (this.newTodo.trim()) {
    this.todoItems.push({ task: this.newTodo, done: false });
    this.newTodo = '';  // Clear the input after adding the task
    }
  }
}



