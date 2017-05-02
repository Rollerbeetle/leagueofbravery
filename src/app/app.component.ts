import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div fxLayout="column">
      <nav class="nav-bar" fxLayout="row">
      <h1 class="nav-bar__link" routerLink="/champions" routerLinkActive="active">
        Champion List
      </h1>
      <h1 class="nav-bar__link" routerLink="/mastery" routerLinkActive="active">
        Mastery
      </h1>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor() {
  }


}
