import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  constructor(private sharedService: SharedService) {}

  login(uname: any, pass: any) {
    this.sharedService.login(uname, pass);
    // console.log(uname, pass);

    // if (uname === 'Admin' && pass === 'Admin') {
    //   localStorage.setItem('admin', 'Admin');
    // }
  }
}
