import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  login(uname: any, pass: any) {
    console.log(uname, pass);

    if (uname === 'Admin' && pass === 'Admin') {
      localStorage.setItem('admin', 'Admin');
    }
  }
}
