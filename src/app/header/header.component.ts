import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- head -->
    <div class="navbar is-dark">
    <!-- Logo Goes Here -->
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../../assets/Icon Only.png" alt="Design Wolf Logo">
        <div class="has-text-white pl-2 is-uppercase">Design Wolf</div>
      </a>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
