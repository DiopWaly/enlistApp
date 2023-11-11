import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { StructureDB } from 'src/app/services/structure-db';
import { UtilsService } from 'src/app/services/utils.service';
import { validation_messages } from 'src/app/services/validation.input';

@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.page.html',
  styleUrls: ['./umerchant-details.page.scss'],
})
export class MerchantDetailsPage implements OnInit {
  @Input() user: any
  @Output() exitDetailUser = new EventEmitter<any>();
  private userEditSubject!: BehaviorSubject<boolean>;
  userEditObs$!: Observable<boolean>
  private userFormSubject!: BehaviorSubject<any>;
  userFormObs$!: Observable<any>
  userForm!: FormGroup;
  validation_messages = validation_messages;
  private readonly typePieceDetail: any = {
    nci: "Numéro carte d'identité", 
    np: "Permis de conduire",
    passport: "Passe port", 
  }
  typePiece!: string;
  constructor(
    private dbService: DatabaseService,
    private fb: FormBuilder,
    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
    // 
    this.userEditSubject = new BehaviorSubject<boolean>(true);
    this.userEditObs$ = this.userEditSubject.asObservable()
    this.userFormSubject = new BehaviorSubject<any>(this.user);
    this.userFormObs$ = this.userFormSubject.asObservable()
    // 
    this.initForm();
  }
  initForm(){
    this.typePiece = this.typePieceDetail[`${this.user.pieceType}`]
    this.userForm = this.fb.group({
      firstName: [this.user.firstName,[Validators.required]],
      lastName: [this.user.lastName,[Validators.required]],
      tel: [this.user.tel,[Validators.required,Validators.pattern(/^(221|00221|\+221)?(77|78|75|70|76|33)[0-9]{7}$/mg)]],
      pieceType: [this.user.pieceType,[]],
      pieceNum: [this.user.pieceNum,[]],
    })
  }
  updateUser(){
    if (this.userForm.valid) {
      this.dbService.update(StructureDB.USER,this.user.id,this.userForm.value)
      .then((result) => {
        this.user.firstName = this.userForm.value.firstName
        this.user.lastName = this.userForm.value.lastName
        this.user.tel = this.userForm.value.tel
        this.user.pieceType = this.userForm.value.pieceType
        this.user.pieceNum = this.userForm.value.pieceNum
        // this.userFormSubject.next(this.user)
        this.userEditSubject.next(true);
      }).catch(e => {
          console.log(JSON.stringify(e))
      })
    }else{
      this.utilsService.checkValidity(this.userForm);
    }
  }
  enableEditingForm(value: boolean){
    if (value) {
      this.initForm()
    }
    this.userEditSubject.next(value);
  }
  /**
   * close the details user
   * @param value 
   */
  closeDetails(value: boolean) {
    const data = {
      user: this.user,
      value
    } 
    this.exitDetailUser.emit(data);
  }
}
