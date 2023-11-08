import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DatabaseService } from 'src/app/services/database.service';
import { StructureDB } from 'src/app/services/structure-db';
import { validation_messages } from 'src/app/services/validation.input';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  userForm!: FormGroup
  photos!: UserPhoto[];
  validation_messages = validation_messages
  constructor(
    private fb: FormBuilder,
    private dbService: DatabaseService,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.userForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      tel: ['',[Validators.required,Validators.pattern(/^(221|00221|\+221)?(77|78|75|70|76|33)[0-9]{7}$/mg)]],
      pieceType: [''],
      pieceNum: [''],
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
    if (this.userForm.valid) {
      this.dbService.insertData(StructureDB.USER,this.userForm.value)
        .then(() => {
          console.log('record insert')
          this.userForm.reset();
          this.router.navigate(['/menu/user/list'])
        })
        .catch(e => console.log(JSON.stringify(e)))
      }
    }
}
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}