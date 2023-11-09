import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
  export class UtilsService {

    constructor(){
        
    }

    /**
     *  verifi la validation d'un formulaire
     * @param g 
     */
    checkValidity(g: FormGroup) {
        Object.keys(g.controls).forEach(key => {
        g.get(key)!.markAsDirty();
        });
        Object.keys(g.controls).forEach(key => {
        g.get(key)!.markAsTouched();
        });
        Object.keys(g.controls).forEach(key => {
        g.get(key)!.updateValueAndValidity();
        });
    }
}