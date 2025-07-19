import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TodoItemComponent } from './todo-item.component';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let todoService: Partial<TodoService>;
  let testTodo: Todo;

  beforeEach(async () => {
    const mockTodoService = {
      toggleTodo: jest.fn(),
      deleteTodo: jest.fn(),
      updateTodo: jest.fn()
    };

    await TestBed.configureTestingModule({
      imports: [
        TodoItemComponent,
        FormsModule,
        NoopAnimationsModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
      ],
      providers: [
        { provide: TodoService, useValue: mockTodoService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);

    testTodo = {
      id: 1,
      title: 'Test todo',
      completed: false,
      createdAt: new Date()
    };
    component.todo = testTodo;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle todo', () => {
    component.toggleTodo();
    expect(todoService.toggleTodo).toHaveBeenCalledWith(testTodo.id);
  });

  it('should delete todo', () => {
    component.deleteTodo();
    expect(todoService.deleteTodo).toHaveBeenCalledWith(testTodo.id);
  });

  it('should start editing', () => {
    component.startEdit();
    expect(component.isEditing()).toBe(true);
    expect(component.editTitle()).toBe(testTodo.title);
  });

  it('should save edit', () => {
    const newTitle = 'Updated todo';
    component.editTitle.set(newTitle);
    component.isEditing.set(true);

    component.saveEdit();

    expect(todoService.updateTodo).toHaveBeenCalledWith(testTodo.id, newTitle);
    expect(component.isEditing()).toBe(false);
  });

  it('should not save edit if title is empty', () => {
    component.editTitle.set('');
    component.isEditing.set(true);

    component.saveEdit();

    expect(todoService.updateTodo).not.toHaveBeenCalled();
    expect(component.isEditing()).toBe(false);
  });

  it('should cancel edit', () => {
    component.isEditing.set(true);
    component.cancelEdit();
    expect(component.isEditing()).toBe(false);
  });
});
