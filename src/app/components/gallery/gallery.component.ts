import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { ImageData } from '../../models/image.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images: ImageData[] = [
    {
      id: 1,
      title: 'Прибережний пейзаж',
      description: 'Серенний прибережний пейзаж з каменями та лісом. Це зображення передає спокій та гармонію природи, надихаючи на творчість та медитацію.',
      src: 'assets/images/coastal-landscape.jpg',
      alt: 'Прибережний пейзаж з каменями та лісом'
    }
  ];

  constructor(private dialog: MatDialog) {}

  openImageDialog(image: ImageData): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      data: image,
      maxWidth: '90vw',
      maxHeight: '90vh',
      width: 'auto',
      height: 'auto',
      panelClass: 'image-dialog-panel'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Діалог закрито');
    });
  }
}
