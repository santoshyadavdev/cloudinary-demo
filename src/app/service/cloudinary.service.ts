import { Injectable } from '@angular/core';
import {
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
} from '@cloudinary/url-gen';
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { Gravity } from '@cloudinary/url-gen/qualifiers';
import { AutoFocus } from '@cloudinary/url-gen/qualifiers/autoFocus';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';

interface CloudinaryProperties {
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

  loadImage(prop: CloudinaryProperties) {
    this.img = this.cld.image('cld-sample-5');
    return this.img.resize(thumbnail().width(prop.width).height(prop.height)); // Crop the image, focusing on the face.
  }

  changeRadius(prop: CloudinaryProperties) {
    this.img = this.cld.image('cld-sample-5');
    return this.img
      .resize(thumbnail().width(prop.width).height(prop.height))
      .roundCorners(byRadius(prop.radius)); // Crop the image, focusing on the face.
  }

  loadVideo(props: CloudinaryProperties) {
    this.vid = this.cld.video('Introduction-Santosh');
    return this.vid.resize(
      fill().width(props.width).height(props.height)
      // .gravity(
      //   Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))
      // )
    ); // Crop the video, focusing on the faces.
    // .roundCorners(byRadius(20)); // Round the corners.
  }

  changeVideoRadius(props: CloudinaryProperties) {
    this.vid = this.cld.video('Introduction-Santosh');
    return this.vid
      .resize(
        fill().width(props.width).height(props.height)
        // .gravity(
        //   Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))
        // )
      ) // Crop the video, focusing on the faces.
      .roundCorners(byRadius(props.radius)); // Round the corners.
  }
}
