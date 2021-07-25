import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <!-- footer -->
    <footer class="footer">
      <div class="containe has-text-centered">
        <p>Made to practice 📘 by Design Wolf</p>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
