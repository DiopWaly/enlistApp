import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.page.html',
  styleUrls: ['./merchant.page.scss'],
})

export class MerchantPage implements OnInit {
  merchantForm!: FormGroup
  photos!: UserPhoto[];
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.merchantForm = this.fb.group({
      merchantCode: ['',[Validators.required]],
      merchantTitle: ['',[Validators.required]],
      tel: ['',[Validators.required]],
      commercialRegister: [''],
    })
    this.photos = [
      {
        filepath: "soon...",
        webviewPath: "../../../../assets/images/photologo.jpg"
      },
      {
        filepath: "soon...",
        webviewPath: "../../../../assets/images/photologo.jpg"
      },
    ]
  }
  async takePhoto(face: number){
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    this.photos[face] = {
      filepath: "soon...",
      webviewPath: image.webPath!
    }
  }
  save(){
  }

}
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
