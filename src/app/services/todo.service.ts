import { Injectable, signal, computed } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = signal<Todo[]>([]);
  private nextId = 1;

  public readonly todosList = this.todos.asReadonly();
  public readonly completedTodos = computed(() =>
    this.todos().filter(todo => todo.completed)
  );
  public readonly activeTodos = computed(() =>
    this.todos().filter(todo => !todo.completed)
  );

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.nextId++,
      title: title.trim(),
      completed: false,
      createdAt: new Date()
    };
    this.todos.update(todos => [...todos, newTodo]);
  }

  toggleTodo(id: number): void {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  deleteTodo(id: number): void {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
  }

  updateTodo(id: number, title: string): void {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, title: title.trim() } : todo
      )
    );
  }
}
