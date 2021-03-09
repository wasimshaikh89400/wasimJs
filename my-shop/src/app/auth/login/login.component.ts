import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  login(uname: any, pass: any) {
    this.sharedService.login(uname, pass);
    //   console.log(uname, pass);

    //   if (uname === 'Admin' && pass === 'Admin') {
    //     this.router.navigate(['/admin']);
    //   }
  }
}
