import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DatabaseService } from 'src/app/services/database.service';
import { StructureDB } from 'src/app/services/structure-db';
import { UtilsService } from 'src/app/services/utils.service';
import { validation_messages } from 'src/app/services/validation.input';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.page.html',
  styleUrls: ['./merchant.page.scss'],
})

export class MerchantPage implements OnInit {
  merchantForm!: FormGroup
  photos!: UserPhoto[];
  validation_messages = validation_messages
  constructor(
    private fb: FormBuilder,
    private dbService: DatabaseService,
    private utilsService: UtilsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.merchantForm = this.fb.group({
      merchantCode: ['',[Validators.required]],
      merchantTitle: ['',[Validators.required]],
      tel: ['',[Validators.required,Validators.pattern(/^(221|00221|\+221)?(77|78|75|70|76|33)[0-9]{7}$/mg)]],
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
    if(this.merchantForm.valid){
      this.dbService.insertData(StructureDB.MERCHANT,this.merchantForm.value)
        .then(() => {
          console.log('record insert')
          this.merchantForm.reset();
          this.router.navigate(['/menu/merchant/list'])
        })
        .catch(e => console.log(JSON.stringify(e)))
      }else{
        this.utilsService.checkValidity(this.merchantForm)
      }
  }
}

// 
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
