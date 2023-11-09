import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  @Input() user: any 
  userForm!: FormGroup;
  constructor(
    private dbService: DatabaseService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log('user :',this.user);
    this.userForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      tel: ['',[Validators.required,Validators.pattern(/^(221|00221|\+221)?(77|78|75|70|76|33)[0-9]{7}$/mg)]],
      pieceType: [''],
      pieceNum: [''],
    })
  }
  updateUser(){

  }
}
