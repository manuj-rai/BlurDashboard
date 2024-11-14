import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [CommonModule, FormsModule]
})
export class TodoComponent {
  todoItems: { task: string, done: boolean }[] = [];
  newTodo: string = '';
  isInputEmpty: boolean = false;  // Track if the input is empty

  constructor() {
    this.loadTodos();
  }

  toggleTodoStatus(index: number) {
    this.todoItems[index].done = !this.todoItems[index].done;
    this.saveTodos();
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoItems.push({ task: this.newTodo, done: false });
      this.newTodo = '';
      this.isInputEmpty = false; // Reset empty check
      this.saveTodos();
    } else {
      this.isInputEmpty = true;  // Set flag to true if input is empty
    }
  }

  saveTodos() {
    localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
  }

  loadTodos() {
    const savedTodos = localStorage.getItem('todoItems');
    if (savedTodos) {
      this.todoItems = JSON.parse(savedTodos);
    }
  }

  @HostListener('document:keydown.enter')
  onEnter() {
    this.addTodo();
  }

  removeTodo(index: number) {
    this.todoItems.splice(index, 1);
    this.saveTodos();
  }
}




