import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

declare global {
  var cloudinary: any;
}
@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
})
export class UploadComponent {
  cloudName = 'dv9bvcs0a'; // replace with your own cloud name
  uploadPreset = 'zibijpyg'; // replace with your own upload preset
  myWidget;

  ngOnInit() {
    this.myWidget = cloudinary.createUploadWidget(
      {
        cloudName: this.cloudName,
        uploadPreset: this.uploadPreset,
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: false,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          document
            .getElementById('uploadedimage')
            .setAttribute('src', result.info.secure_url);
        }
      }
    );
  }

  openWidget() {
    this.myWidget.open();
  }
}
