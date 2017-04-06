import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div fxLayout="column">
      <h1 >
        Champion List
      </h1>
      <champion-list></champion-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
  }


}
