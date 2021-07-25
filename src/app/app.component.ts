import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- head -->
  <div class="navbar is-dark">
    <!-- Logo Goes Here -->
    <div class="navbar-brand">
      <a class="navbar-item">
        My logo goes here
      </a>
    </div>
  </div>

    <!-- body -->




    <router-outlet></router-outlet>

    <!-- footer -->
    <footer class="footer">
      <div class="containe has-text-centered">
        <p>Made to practice 📘 by Design Wolf</p>
      </div>
    </footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
