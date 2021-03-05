import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css'],
})
export class MotoComponent implements OnInit {
  id: any;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe(
      (data: any) => (this.id = data.get('id'))
    );
  }

  ngOnInit(): void {}
}
