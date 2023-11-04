import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DatabaseService } from 'src/app/services/database.service';
import { StructureDB } from 'src/app/services/structure-db';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.page.html',
  styleUrls: ['./merchant.page.scss'],
})

export class MerchantPage implements OnInit {
  merchantForm!: FormGroup
  photos!: UserPhoto[];
  constructor(
    private fb: FormBuilder,
    private dbService: DatabaseService,
    private router: Router,
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
    this.dbService.insertData(StructureDB.MERCHANT,this.merchantForm.value)
      .then(() => {
        console.log('record insert')
        this.merchantForm.reset();
        this.router.navigate(['/menu/merchant/list'])
      })
      .catch(e => console.log(JSON.stringify(e)))
  }

}
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
