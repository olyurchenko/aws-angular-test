import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ImageDialogComponent } from './image-dialog.component';
import { ImageData } from '../../models/image.model';

describe('ImageDialogComponent', () => {
  let component: ImageDialogComponent;
  let fixture: ComponentFixture<ImageDialogComponent>;
  let mockDialogRef: Partial<MatDialogRef<ImageDialogComponent>>;
  let mockImageData: ImageData;

  beforeEach(async () => {
    mockDialogRef = {
      close: jest.fn()
    };

    mockImageData = {
      id: 1,
      title: 'Test Image',
      description: 'Test description',
      src: 'assets/images/test.jpg',
      alt: 'Test alt'
    };

    await TestBed.configureTestingModule({
      imports: [
        ImageDialogComponent,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockImageData }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display image data', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Test Image');
    expect(compiled.textContent).toContain('Test description');
    expect(compiled.querySelector('img')).toBeTruthy();
  });

  it('should close dialog when close button is clicked', () => {
    const compiled = fixture.nativeElement;
    const closeButton = compiled.querySelector('.close-button');

    closeButton.click();

    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should close dialog when close method is called', () => {
    component.close();

    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should trigger download when download method is called', () => {
    const mockElement = {
      href: '',
      download: '',
      click: jest.fn()
    };
    jest.spyOn(document, 'createElement').mockReturnValue(mockElement as any);

    component.download();

    expect(document.createElement).toHaveBeenCalledWith('a');
  });

  it('should have correct dialog title', () => {
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('h2');
    expect(title.textContent).toContain('Test Image');
  });

  it('should have download button', () => {
    const compiled = fixture.nativeElement;
    const downloadButton = compiled.querySelector('button[color="primary"]');
    expect(downloadButton).toBeTruthy();
    expect(downloadButton.textContent).toContain('Завантажити');
  });
});
