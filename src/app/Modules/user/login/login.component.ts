import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/Interfaces/login';
import { ApiService } from 'src/app/shared/services/api.service';
import { ShareService } from 'src/app/shared/services/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router,private share:ShareService) {
    this.loginForm = this.fb.group({
      email: ['',[ Validators.required,Validators.email]],
      password: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
    
  }

  login() {
    const loginFormValue:Login = this.loginForm.getRawValue();
    if(loginFormValue){
      this.api.getUserDetailsByEmailPassword(loginFormValue.email,loginFormValue.password)?.subscribe((res:any)=>{
        if(res && res.length){
            localStorage.setItem('user',JSON.stringify(res));
            // this.share.userName.next(res.displayName)
            // this.share.isTrue.next(true)
            this.router.navigate([''])
        }else{
          alert("please signup first")
        }
      },(err)=>{
        console.log(err,"Error")
      })
      console.log('this login form value', loginFormValue);
    }
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

}
