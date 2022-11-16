import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 mail: string ='';
 password: string ='';
  constructor() {}
 
  ngOnInit(): void {}
  
check2():void{
  let user_str = localStorage.getItem("userinfo");
  if (user_str !== null){
    let user = JSON.parse(user_str);
    if (this.mail !== user['mail']){
      console.log('Неверно указанна почта')
      alert('Неверно указанна почта')
      return
    }else{
        if (this.password !== user['password']){
          console.log('Неверно указан пароль')
          alert('Неверно указан пароль')
          return
        }
      }
      
    }
  }

  enter(): void {
    this.check2
    let user_str = localStorage.getItem("userinfo");
    
    if (user_str !== null){
      let user = JSON.parse(user_str);
      if (this.mail == user['mail']){
        if (this.password === user['password']){
          console.log('Вы вошли')
          alert('Вы вошли')
        }
      }
    }
  }
}
