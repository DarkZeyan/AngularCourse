// Uso de Snippets a-component
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
  Counter: {{counter}}
  <!-- Angular tambien tiene deteccion de errores en el HTML por TypeScript -->
  </h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Resetear contador</button>
  <button button button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter(): void {
    this.counter = 10;
  }
}


// import { Component } from "@angular/core";

// @Component({
//   selector:'app-counter',
//   template:'<h1>Hola Counter</h1>'
// })
// export class CounterComponent{

// }
