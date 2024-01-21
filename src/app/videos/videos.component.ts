import { Component } from '@angular/core';
import { CloudinaryModule } from '@cloudinary/ng';
import { CloudinaryVideo } from '@cloudinary/url-gen';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';

import { CloudinaryService } from '../service/cloudinary.service';


@Component({
  selector: 'app-videos',
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
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent {
  vid!: CloudinaryVideo;
  width = '0';
  height = 0;
  rounded = false;
  radius = 0;

  constructor(private readonly cludinaryService: CloudinaryService) {}

  ngOnInit() {
    this.vid = this.cludinaryService.loadVideo({
      height: 200,
      width: 200,
    });
  }

  applyTrasformnation() {
    this.vid = this.rounded
      ? this.applyRadius()
      : this.cludinaryService.loadVideo({
          width: this.width,
          height: this.height,
        });
  }

  applyRadius() {
    return this.cludinaryService.changeVideoRadius({
      width: this.width,
      height: this.height,
      radius: this.radius,
      roundCorners: this.rounded,
    });
  }
}
