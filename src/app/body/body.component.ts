import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  template: `

<section class="hero is-link is-fullheight-with-navbar">
  <div class="hero-body">
    <p class="title">
      Design Wolf Angular Practice
    </p>
  </div>
</section>
  `,
  styles: [
  ]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
