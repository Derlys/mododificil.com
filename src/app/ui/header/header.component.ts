import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  open = false;
  toggle() {
    this.open = !this.open;
  }
  ngOnInit(): void {}
}
