import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
askQuestion(){
  let user = JSON.parse(localStorage.getItem('user'))
  console.log('click')
  if(user){
    if(user.length){
      this.router.navigate(['questions/ask-question'])
    }
  }else if(!user){
    alert("Login please")
    this.router.navigate(['user/login'])
  }
}
}
