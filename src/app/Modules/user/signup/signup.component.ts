import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/shared/Interfaces/signup';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router) { 
    this.signupForm = this.fb.group({
      displayName : ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }
  signupForm:FormGroup

  signup(){
    let formValues:Signup = this.signupForm.getRawValue()
    console.log(formValues,"signup form")
    if(formValues){
      this.api.addUser(formValues)?.subscribe((res)=>{
        if(res){
          console.log("res",res)
          this.router.navigate(['login'])
        }
      },(err)=>{
        console.log("err",err)
      })

    }
  }

  get displayName(){
    return this.signupForm.get('displayName');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }
}
