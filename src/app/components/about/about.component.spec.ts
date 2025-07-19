import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AboutComponent,
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display about title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('About Todo List App');
  });

  it('should display app description', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Todo List App is a modern web application');
  });

  it('should display features list', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Adding new tasks');
    expect(compiled.textContent).toContain('Editing existing tasks');
    expect(compiled.textContent).toContain('Marking tasks as completed');
  });

  it('should display technology stack', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Angular 18');
    expect(compiled.textContent).toContain('Angular Material');
    expect(compiled.textContent).toContain('Angular Signals');
  });

  it('should display architecture section', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Architecture');
    expect(compiled.textContent).toContain('Standalone Components');
    expect(compiled.textContent).toContain('Responsive Design');
  });
});
