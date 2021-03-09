import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private router: Router) {}

  calcProds(prods: any) {
    let sum = 0;
    for (let prod of prods) sum += prod.inStock;
    return sum;
  }

  login(uname: any, pass: any) {
    console.log(uname, pass);

    if (uname === 'Admin' && pass === 'Admin') {
      localStorage.setItem('admin', 'Admin');
      this.router.navigate(['/admin']);
    }
  }
}
