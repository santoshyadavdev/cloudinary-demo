import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'image',
    title: 'Coudinary Image Module',
    loadComponent: () =>
      import('./images/images.component').then((m) => m.ImagesComponent),
  },
  {
    path: 'video',
    title: 'Coudinary Video Module',
    loadComponent: () =>
      import('./videos/videos.component').then((m) => m.VideosComponent),
  },
  {
    path: 'upload',
    title: 'Upload cloudinary assets',
    loadComponent: () =>
      import('./upload/upload.component').then((m) => m.UploadComponent),
  },
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full'
  }
];
