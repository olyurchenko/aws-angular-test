import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let dialog: MatDialog;

  beforeEach(async () => {
    const dialogMock = {
      open: jest.fn()
    } as unknown as MatDialog;

    await TestBed.configureTestingModule({
      imports: [
        GalleryComponent,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatDialog, useValue: dialogMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have images array', () => {
    expect(component.images).toBeDefined();
    expect(Array.isArray(component.images)).toBe(true);
  });

  it('should have at least one image', () => {
    expect(component.images.length).toBeGreaterThan(0);
  });

  it('should display gallery title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Галерея зображень');
  });

  it('should display gallery subtitle', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Красиві пейзажі та фотографії');
  });

  it('should render gallery items', () => {
    const compiled = fixture.nativeElement;
    const galleryItems = compiled.querySelectorAll('.gallery-item');
    expect(galleryItems.length).toBe(component.images.length);
  });

  it('should display image titles', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Прибережний пейзаж');
  });

  it('should display image descriptions', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Серенний прибережний пейзаж');
  });

  it('should have openImageDialog method', () => {
    expect(component.openImageDialog).toBeDefined();
    expect(typeof component.openImageDialog).toBe('function');
  });

  it('should have zoom icons', () => {
    const compiled = fixture.nativeElement;
    const zoomIcons = compiled.querySelectorAll('.image-overlay mat-icon');
    expect(zoomIcons.length).toBeGreaterThan(0);
  });

  it('should have gallery info section', () => {
    const compiled = fixture.nativeElement;
    const infoSection = compiled.querySelector('.gallery-info');
    expect(infoSection).toBeTruthy();
  });
});
