import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
    <article>
      <ng-content>
      </ng-content>
      <p>Inside another component</p>
    </article>
  `,
  styles: [`
    article {
      border: 1px solid black;
    }
  `
  ]
})
export class AnotherComponent {
}
