import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SidebarComponent,
        NoopAnimationsModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have sidenav container', () => {
    const compiled = fixture.nativeElement;
    const sidenavContainer = compiled.querySelector('mat-sidenav-container');
    expect(sidenavContainer).toBeTruthy();
  });

  it('should have sidenav', () => {
    const compiled = fixture.nativeElement;
    const sidenav = compiled.querySelector('mat-sidenav');
    expect(sidenav).toBeTruthy();
  });

  it('should have sidenav content', () => {
    const compiled = fixture.nativeElement;
    const sidenavContent = compiled.querySelector('mat-sidenav-content');
    expect(sidenavContent).toBeTruthy();
  });

  it('should have toolbar', () => {
    const compiled = fixture.nativeElement;
    const toolbar = compiled.querySelector('mat-toolbar');
    expect(toolbar).toBeTruthy();
  });

  it('should have navigation links', () => {
    const compiled = fixture.nativeElement;
    const navLinks = compiled.querySelectorAll('a[mat-list-item]');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  it('should have correct navigation labels', () => {
    const compiled = fixture.nativeElement;
    const homeLink = compiled.querySelector('a[routerLink="/home"] span');
    const aboutLink = compiled.querySelector('a[routerLink="/about"] span');
    const galleryLink = compiled.querySelector('a[routerLink="/gallery"] span');

    expect(homeLink.textContent).toContain('Home');
    expect(aboutLink.textContent).toContain('About');
    expect(galleryLink.textContent).toContain('Gallery');
  });

  it('should have menu button for mobile', () => {
    const compiled = fixture.nativeElement;
    const menuButton = compiled.querySelector('button[aria-label="Toggle sidenav"]');
    expect(menuButton).toBeTruthy();
  });

  it('should have app title', () => {
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('mat-toolbar span');
    expect(title.textContent).toContain('Todo List App');
  });
});
