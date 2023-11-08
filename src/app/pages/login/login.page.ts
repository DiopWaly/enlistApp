import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { MenuController } from '@ionic/angular';
import { BiometryType, NativeBiometric } from 'capacitor-native-biometric';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isFingerprint: boolean = false
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    ) { }

  ngOnInit() {
    this.performBiometricVerificatin();
    this.isFinger()
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  async isFinger(){
    const result = await NativeBiometric.isAvailable();
    this.isFingerprint = result.biometryType == BiometryType.FINGERPRINT;
    console.log('this.isFingerprint : ',this.isFingerprint);
    
  }
  login(){
    this.router.navigate(['menu'],{fragment: 'Utilisateurs'})
  }

  async performBiometricVerificatin(){
    const result = await NativeBiometric.isAvailable();
  
    if(!result.isAvailable) return;
  
    const isFaceID = result.biometryType == BiometryType.FACE_ID;
  
    const verified = await NativeBiometric.verifyIdentity({
      // reason: "For easy log in",
      title: "Déverrouiller",
      // subtitle: "Maybe add subtitle here?",
      // description: "Maybe a description too?",
    })
      .then(() => {
        this.login();
        return true
      })
      .catch(() => false);
  
    if(!verified) return;
  
    // const credentials = await NativeBiometric.getCredentials({
    //   server: "www.example.com",
    // });
  }

}
