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
    expect(compiled.textContent).toContain('Про Todo List App');
  });

  it('should display app description', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Todo List App - це сучасний веб-додаток');
  });

  it('should display features list', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Додавання нових завдань');
    expect(compiled.textContent).toContain('Редагування існуючих завдань');
    expect(compiled.textContent).toContain('Позначення завдань як завершених');
  });

  it('should display technology stack', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Angular 17');
    expect(compiled.textContent).toContain('Angular Material');
    expect(compiled.textContent).toContain('Angular Signals');
  });

  it('should display architecture section', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Архітектура');
    expect(compiled.textContent).toContain('Standalone Components');
    expect(compiled.textContent).toContain('Responsive Design');
  });

  it('should have tech stack items', () => {
    const compiled = fixture.nativeElement;
    const techItems = compiled.querySelectorAll('.tech-item');
    expect(techItems.length).toBeGreaterThan(0);
  });

  it('should have material icons', () => {
    const compiled = fixture.nativeElement;
    const icons = compiled.querySelectorAll('mat-icon');
    expect(icons.length).toBeGreaterThan(0);
  });
});
