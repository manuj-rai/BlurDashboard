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

  constructor() {
    this.loadTodos();  // Load todos from local storage on component initialization
  }

  toggleTodoStatus(index: number) {
    this.todoItems[index].done = !this.todoItems[index].done;
    this.saveTodos();  // Save updated todos to local storage
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoItems.push({ task: this.newTodo, done: false });
      this.newTodo = '';  // Clear input after adding
      this.saveTodos();   // Save new list to local storage
    }
  }

  // Method to store the todoItems in local storage
  saveTodos() {
    localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
  }

  // Method to load the todoItems from local storage
  loadTodos() {
    const savedTodos = localStorage.getItem('todoItems');
    if (savedTodos) {
      this.todoItems = JSON.parse(savedTodos);
    }
  }

  // Detects Enter key press and triggers addTodo if input is focused
  @HostListener('document:keydown.enter')
  onEnter() {
    this.addTodo();
  }

    // Method to remove a todo item
    removeTodo(index: number) {
      this.todoItems.splice(index, 1); // Remove the todo item at the specified index
      this.saveTodos();  // Save the updated list to local storage
    }
}



