import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';
//FormControl - Represents a single input field 
//FormGroup - Represents a group of controls. It can also contain nested groups

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  formInformation: any;

  cardForm = new FormGroup ({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    number: new FormControl('',[Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern(/\d+/)]),
    expiration: new DateFormControl('',[Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  })
  constructor(){}

  onSubmit(){
    this.formInformation = this.cardForm.value
    console.log(this.formInformation)
  }
}


// Validators.maxLength(5),// Validators.pattern(/\s/)