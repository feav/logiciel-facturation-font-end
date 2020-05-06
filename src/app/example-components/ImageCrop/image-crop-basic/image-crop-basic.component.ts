import {Component, ViewChild} from '@angular/core';
import {ImageCroppedEvent, ImageCropperComponent} from 'ngx-image-cropper';

@Component({
    selector: 'app-image-crop-basic',
    templateUrl: './image-crop-basic.component.html',
})
export class ImageCropBasicComponent {

    imageChangedEvent: any = '';
    croppedImage: any = '';
    showCropper = false;

    @ViewChild(ImageCropperComponent, {static: false}) imageCropper: ImageCropperComponent;

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        console.log(event);
    }

    imageLoaded() {
        this.showCropper = true;
    }

    rotateLeft() {
        this.imageCropper.rotateLeft();
    }

    rotateRight() {
        this.imageCropper.rotateRight();
    }

    flipHorizontal() {
        this.imageCropper.flipHorizontal();
    }

    flipVertical() {
        this.imageCropper.flipVertical();
    }
}
