import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CloudinaryModule } from '@cloudinary/ng';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CloudinaryService } from '../service/cloudinary.service';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [
    CloudinaryModule,
    MatCardModule,
    MatExpansionModule,
    MatSliderModule,
    FormsModule,
    JsonPipe,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss',
})
export class ImagesComponent {
  panelOpenState = false;
  img!: CloudinaryImage;
  width = '0';
  height = 0;
  rounded = false;
  radius = 0;

  formatLabel(value: number): string {
    return `${value}px`;
  }

  constructor(private readonly imageService: CloudinaryService) {}

  ngOnInit() {
    this.img = this.imageService.loadImage({
      height: 250,
      width: 250,
    });
  }

  applyTrasformnation() {
    this.img = this.rounded
      ? this.applyRadius()
      : this.imageService.loadImage({
          width: this.width,
          height: this.height,
        });
  }

  applyRadius() {
    return this.imageService.changeRadius({
      width: this.width,
      height: this.height,
      radius: this.radius,
      roundCorners: this.rounded,
    });
  }
}
