import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-mi-historia',
  templateUrl: './mi-historia.component.html',
  styleUrls: ['./mi-historia.component.scss'],
})
export class MiHistoriaComponent implements OnInit {
  text: string = require('!!raw-loader!./mi-historia.md').default;

  constructor() {}

  ngOnInit(): void {}
}
