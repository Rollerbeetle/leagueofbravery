import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div fxLayout="column">
      <h1 routerLink="/">
        Champion List
      </h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor() {
  }


}
