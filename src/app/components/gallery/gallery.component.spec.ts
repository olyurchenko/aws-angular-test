import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GalleryComponent,
        NoopAnimationsModule,
        MatDialogModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display gallery title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Image Gallery');
  });

  it('should have gallery grid', () => {
    const compiled = fixture.nativeElement;
    const galleryGrid = compiled.querySelector('.gallery-grid');
    expect(galleryGrid).toBeTruthy();
  });

  it('should have gallery items', () => {
    const compiled = fixture.nativeElement;
    const galleryItems = compiled.querySelectorAll('.gallery-item');
    expect(galleryItems.length).toBeGreaterThan(0);
  });

  it('should have images', () => {
    const compiled = fixture.nativeElement;
    const images = compiled.querySelectorAll('.gallery-image');
    expect(images.length).toBeGreaterThan(0);
  });

  it('should have image overlays', () => {
    const compiled = fixture.nativeElement;
    const overlays = compiled.querySelectorAll('.image-overlay');
    expect(overlays.length).toBeGreaterThan(0);
  });

  it('should have image titles', () => {
    const compiled = fixture.nativeElement;
    const titles = compiled.querySelectorAll('h3');
    expect(titles.length).toBeGreaterThan(0);
  });

  it('should have image descriptions', () => {
    const compiled = fixture.nativeElement;
    const descriptions = compiled.querySelectorAll('p');
    expect(descriptions.length).toBeGreaterThan(0);
  });
});
