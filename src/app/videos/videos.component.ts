import { Component } from '@angular/core';
import { CloudinaryModule } from '@cloudinary/ng';
import { CloudinaryService } from '../service/cloudinary.service';
import { CloudinaryVideo } from '@cloudinary/url-gen';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CloudinaryModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent {
  vid!: CloudinaryVideo;
  constructor(private readonly cludinaryService: CloudinaryService) {}

  ngOnInit() {
    this.vid = this.cludinaryService.loadVideo();
  }
}
