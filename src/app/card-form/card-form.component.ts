import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    number: new FormControl(''),
    expiration: new FormControl(''),
    securityCode: new FormControl('')
  })
  constructor(){}

  onSubmit(){
    this.formInformation = this.cardForm.value
    console.log(this.formInformation)
  }
}


// Validators.maxLength(5),// Validators.pattern(/\s/)