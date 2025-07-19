import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let todoService: TodoService;

  const testTodo: Todo = {
    id: 1,
    title: 'Test Todo',
    description: 'Test Description',
    completed: false,
    createdAt: new Date()
  };

  beforeEach(async () => {
    const todoServiceMock = {
      toggleTodo: jest.fn(),
      deleteTodo: jest.fn()
    } as unknown as TodoService;

    await TestBed.configureTestingModule({
      imports: [
        TodoItemComponent,
        NoopAnimationsModule
      ],
      providers: [
        { provide: TodoService, useValue: todoServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = testTodo;
    todoService = TestBed.inject(TodoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display todo title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Test Todo');
  });

  it('should display todo description', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Test Description');
  });

  it('should have checkbox', () => {
    const compiled = fixture.nativeElement;
    const checkbox = compiled.querySelector('mat-checkbox');
    expect(checkbox).toBeTruthy();
  });

  it('should have edit button', () => {
    const compiled = fixture.nativeElement;
    const editButton = compiled.querySelector('.edit-button');
    expect(editButton).toBeTruthy();
  });

  it('should have delete button', () => {
    const compiled = fixture.nativeElement;
    const deleteButton = compiled.querySelector('.delete-button');
    expect(deleteButton).toBeTruthy();
  });

  it('should call toggleTodo when checkbox is clicked', () => {
    const compiled = fixture.nativeElement;
    const checkbox = compiled.querySelector('mat-checkbox');

    checkbox.click();

    expect(todoService.toggleTodo).toHaveBeenCalledWith(testTodo.id);
  });

  it('should call deleteTodo when delete button is clicked', () => {
    const compiled = fixture.nativeElement;
    const deleteButton = compiled.querySelector('.delete-button');

    deleteButton.click();

    expect(todoService.deleteTodo).toHaveBeenCalledWith(testTodo.id);
  });

  it('should have editTodo method', () => {
    expect(component.editTodo).toBeDefined();
    expect(typeof component.editTodo).toBe('function');
  });

  it('should display creation date', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Created:');
  });
});
