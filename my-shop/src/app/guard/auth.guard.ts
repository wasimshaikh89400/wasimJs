import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate() {
    let tok = localStorage.getItem('isAdmin');
    console.log(' tok', tok);
    if (tok === 'Admin') return true;
    return false;
  }
}
