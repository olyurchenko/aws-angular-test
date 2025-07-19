import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { Todo } from '../models/todo.model';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add todo', () => {
    const title = 'Test todo';
    service.addTodo(title);

    expect(service.todosList().length).toBe(1);
    expect(service.todosList()[0].title).toBe(title);
    expect(service.todosList()[0].completed).toBe(false);
  });

  it('should toggle todo', () => {
    service.addTodo('Test todo');
    const todo = service.todosList()[0];

    service.toggleTodo(todo.id);
    expect(service.todosList()[0].completed).toBe(true);

    service.toggleTodo(todo.id);
    expect(service.todosList()[0].completed).toBe(false);
  });

  it('should delete todo', () => {
    service.addTodo('Test todo');
    const todo = service.todosList()[0];

    service.deleteTodo(todo.id);
    expect(service.todosList().length).toBe(0);
  });

  it('should update todo', () => {
    service.addTodo('Test todo');
    const todo = service.todosList()[0];
    const newTitle = 'Updated todo';

    service.updateTodo(todo.id, newTitle);
    expect(service.todosList()[0].title).toBe(newTitle);
  });

  it('should compute completed todos', () => {
    service.addTodo('Todo 1');
    service.addTodo('Todo 2');

    // Спочатку всі todos активні
    expect(service.completedTodos().length).toBe(0);
    expect(service.activeTodos().length).toBe(2);

    // Позначаємо перший todo як завершений
    const todos = service.todosList();
    service.toggleTodo(todos[0].id);

    // Перевіряємо, чи правильно змінився стан
    expect(service.todosList()[0].completed).toBe(true);
    expect(service.todosList()[1].completed).toBe(false);

    // Тепер перевіряємо computed signals
    expect(service.completedTodos().length).toBe(1);
    expect(service.activeTodos().length).toBe(1);
  });

  it('should handle multiple toggles correctly', () => {
    service.addTodo('Todo 1');
    service.addTodo('Todo 2');
    service.addTodo('Todo 3');

    const todos = service.todosList();

    // Позначаємо перший та третій як завершені
    service.toggleTodo(todos[0].id);
    service.toggleTodo(todos[2].id);

    expect(service.todosList()[0].completed).toBe(true);
    expect(service.todosList()[1].completed).toBe(false);
    expect(service.todosList()[2].completed).toBe(true);

    expect(service.completedTodos().length).toBe(2);
    expect(service.activeTodos().length).toBe(1);
    expect(service.todosList().length).toBe(3);
  });
});
