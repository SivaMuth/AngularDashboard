import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl,FormGroup,Validators } from "@angular/forms";
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
userFormData:any;
  constructor() { 
    this.userFormData = new FormGroup({
          'username' : new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
          'email' : new FormControl("",[Validators.required,Validators.email]),
          'phone' : new FormControl("",[Validators.required,Validators.min(9999999),Validators.max(9999999999)]),
          'countryCode' : new FormControl(""),
          'country' : new FormControl(),
          'state' : new FormControl(),
          'city' : new FormControl(),
          'skills' : new FormArray([
            new FormGroup({
              'skillName' : new FormControl(),
              'rating' : new FormControl()
            }),
            new FormGroup({
              'skillName' : new FormControl(),
              'rating' : new FormControl()

            })
          ]),
    })
  }
  ngOnInit(): void {
  }

  postFormData() {
    console.log(this.userFormData.value)
  }

} 
