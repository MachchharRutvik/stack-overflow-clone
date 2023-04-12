import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/shared/services/share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cd:ChangeDetectorRef,private router: Router,private share:ShareService) { }

  ngOnInit(): void {
    this.checkIfUserLoggedIn()
 
  }
  isUserLoggedIn:boolean = false
  userName:any
  login() {
    this.router.navigate(['user/login']);
  }
  signUp(){
    this.router.navigate(['user/signup'])
  }
  checkIfUserLoggedIn(){
   
    let user = localStorage.getItem('user')
    console.log(user,"user")
    if(user && user.length){
      this.isUserLoggedIn = true
    }
  }
  logout(){
    localStorage.removeItem('user')
    this.share.isTrue.next(false)
    this.share.userName.next('');
    this.router.navigate(['user/login'])
  }
  
}
