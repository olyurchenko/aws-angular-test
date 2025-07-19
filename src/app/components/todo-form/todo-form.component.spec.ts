import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TodoFormComponent } from './todo-form.component';
import { TodoService } from '../../services/todo.service';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let todoService: Partial<TodoService>;

  beforeEach(async () => {
    const mockTodoService = {
      addTodo: jest.fn()
    };

    await TestBed.configureTestingModule({
      imports: [
        TodoFormComponent,
        FormsModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
      ],
      providers: [
        { provide: TodoService, useValue: mockTodoService }
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

  it('should add todo when form is submitted', () => {
    const testTitle = 'Test todo';
    component.newTodoTitle.set(testTitle);

    component.addTodo();

    expect(todoService.addTodo).toHaveBeenCalledWith(testTitle);
    expect(component.newTodoTitle()).toBe('');
  });

  it('should not add todo when title is empty', () => {
    component.newTodoTitle.set('');

    component.addTodo();

    expect(todoService.addTodo).not.toHaveBeenCalled();
  });

  it('should not add todo when title is only whitespace', () => {
    component.newTodoTitle.set('   ');

    component.addTodo();

    expect(todoService.addTodo).not.toHaveBeenCalled();
  });
});
