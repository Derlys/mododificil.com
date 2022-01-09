import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouthome',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.scss'],
})
export class LayoutHomeComponent implements OnInit {
  public navbarOpen = false;
  constructor() {}
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit(): void {}
}
