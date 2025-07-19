import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

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
  images = [
    {
      id: 1,
      title: 'Прибережний пейзаж',
      description: 'Серенний прибережний пейзаж з каменями та лісом',
      src: 'assets/images/coastal-landscape.jpg',
      alt: 'Прибережний пейзаж з каменями та лісом'
    }
  ];

  constructor(private dialog: MatDialog) {}

  openImageDialog(image: any): void {
    // Можна додати діалог для перегляду зображення в повному розмірі
    console.log('Відкрити зображення:', image.title);
  }
}
