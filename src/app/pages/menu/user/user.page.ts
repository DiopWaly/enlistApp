import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  userForm!: FormGroup
  constructor(
    private fb: FormBuilder,
    private dbService: DatabaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      tel: ['',[Validators.required]],
      pieceType: [''],
      pieceNum: [''],
    })
  }

  save(){
    console.log(this.userForm.value);
    
    this.dbService.insertData('user',this.userForm.value)
      .then(() => {
        console.log('record insert')
        this.router.navigate(['/menu/user/list'])
      })
      .catch(e => console.log(JSON.stringify(e)))
  }
}