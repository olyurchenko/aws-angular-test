import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { TodoListComponent } from './todo-list.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../../services/todo.service';
import { signal } from '@angular/core';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: Partial<TodoService>;

  beforeEach(async () => {
    const mockTodoService = {
      todosList: signal([]),
      completedTodos: signal([]),
      activeTodos: signal([])
    };

    await TestBed.configureTestingModule({
      imports: [
        TodoListComponent,
        TodoFormComponent,
        TodoItemComponent,
        NoopAnimationsModule,
        MatCardModule,
        MatDividerModule,
        MatChipsModule
      ],
      providers: [
        { provide: TodoService, useValue: mockTodoService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get todos list from service', () => {
    expect(component.todosList).toBe(todoService.todosList);
  });

  it('should get completed todos from service', () => {
    expect(component.completedTodos).toBe(todoService.completedTodos);
  });

  it('should get active todos from service', () => {
    expect(component.activeTodos).toBe(todoService.activeTodos);
  });
});
