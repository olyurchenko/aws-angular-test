import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    const todoServiceMock = {
      addTodo: jest.fn()
    } as unknown as TodoService;

    await TestBed.configureTestingModule({
      imports: [
        TodoFormComponent,
        NoopAnimationsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: TodoService, useValue: todoServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have todoForm', () => {
    expect(component.todoForm).toBeDefined();
  });

  it('should have title field', () => {
    const compiled = fixture.nativeElement;
    const titleField = compiled.querySelector('input[formControlName="title"]');
    expect(titleField).toBeTruthy();
  });

  it('should have description field', () => {
    const compiled = fixture.nativeElement;
    const descriptionField = compiled.querySelector('textarea[formControlName="description"]');
    expect(descriptionField).toBeTruthy();
  });

  it('should have submit button', () => {
    const compiled = fixture.nativeElement;
    const submitButton = compiled.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();
  });

  it('should have clear button', () => {
    const compiled = fixture.nativeElement;
    const clearButton = compiled.querySelector('button[type="button"]');
    expect(clearButton).toBeTruthy();
  });

  it('should call addTodo when form is submitted', () => {
    const testTitle = 'Test Task';
    const testDescription = 'Test Description';

    component.todoForm.patchValue({
      title: testTitle,
      description: testDescription
    });

    component.onSubmit();

    expect(todoService.addTodo).toHaveBeenCalledWith(testTitle, testDescription);
  });

  it('should reset form after submission', () => {
    const testTitle = 'Test Task';

    component.todoForm.patchValue({
      title: testTitle,
      description: 'Test Description'
    });

    component.onSubmit();

    expect(component.todoForm.get('title')?.value).toBe('');
    expect(component.todoForm.get('description')?.value).toBe('');
  });

  it('should reset form when clear button is clicked', () => {
    component.todoForm.patchValue({
      title: 'Test Task',
      description: 'Test Description'
    });

    component.resetForm();

    expect(component.todoForm.get('title')?.value).toBe('');
    expect(component.todoForm.get('description')?.value).toBe('');
  });
});
