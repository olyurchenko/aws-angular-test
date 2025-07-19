import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BreakpointObserver } from '@angular/cdk/layout';
import { of } from 'rxjs';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let breakpointObserver: BreakpointObserver;

  beforeEach(async () => {
    const breakpointObserverMock = {
      observe: jest.fn().mockReturnValue(of({ matches: false }))
    } as unknown as BreakpointObserver;

    await TestBed.configureTestingModule({
      imports: [
        SidebarComponent,
        NoopAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: BreakpointObserver, useValue: breakpointObserverMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    breakpointObserver = TestBed.inject(BreakpointObserver);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have isHandset$ observable', () => {
    expect(component.isHandset$).toBeDefined();
  });

  it('should observe breakpoints', () => {
    expect(breakpointObserver.observe).toHaveBeenCalled();
  });

  it('should render navigation links', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a[routerLink="/home"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/about"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/gallery"]')).toBeTruthy();
  });

  it('should have correct navigation labels', () => {
    const compiled = fixture.nativeElement;
    const homeLink = compiled.querySelector('a[routerLink="/home"] span');
    const aboutLink = compiled.querySelector('a[routerLink="/about"] span');
    const galleryLink = compiled.querySelector('a[routerLink="/gallery"] span');

    expect(homeLink.textContent).toContain('Головна');
    expect(aboutLink.textContent).toContain('Про додаток');
    expect(galleryLink.textContent).toContain('Галерея');
  });

  it('should have navigation icons', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-icon')).toBeTruthy();
  });
});
