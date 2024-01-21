import { Injectable } from '@angular/core';
import { Cloudinary, CloudinaryImage, CloudinaryVideo } from '@cloudinary/url-gen';
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { Gravity } from '@cloudinary/url-gen/qualifiers';
import { AutoFocus } from '@cloudinary/url-gen/qualifiers/autoFocus';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';

interface ImageProperties {
  width: number | string;
  height: number | string;
  roundCorners?: boolean;
  radius?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  cld: Cloudinary;
  img!: CloudinaryImage;
  vid!: CloudinaryVideo;
  constructor() {
    this.cld = new Cloudinary({
      cloud: {
        cloudName: 'dv9bvcs0a',
      },
    });
  }

  loadImage(prop: ImageProperties) {
    this.img = this.cld.image('cld-sample-5');
    return this.img.resize(thumbnail().width(prop.width).height(prop.height)); // Crop the image, focusing on the face.
  }

  changeRadius(prop: ImageProperties) {
    this.img = this.cld.image('cld-sample-5');
    return this.img
      .resize(thumbnail().width(prop.width).height(prop.height))
      .roundCorners(byRadius(prop.radius)); // Crop the image, focusing on the face.
  }

  loadVideo() {
    this.vid = this.cld.video('Introduction-Santosh');
    return this.vid
      .resize(
        fill()
          .width(150)
          .height(150)
          .gravity(
            Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))
          )
      ) // Crop the video, focusing on the faces.
      .roundCorners(byRadius(20)); // Round the corners.
  }
}
