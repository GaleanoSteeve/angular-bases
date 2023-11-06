import { Component } from "@angular/core";

@Component({
    selector: 'app-counter', //Como quiero utilizar el componente en Angular
    template: `
    <div style="border: solid;">
      <h3>Counter: {{ counter }}</h3>

      <button (click)="increasyBy(+1)">+1</button>
      <button (click)="resetCounter()">Reset</button>
      <button (click)="increasyBy(-1)">-1</button>    
    </div>`
})

export class CounterComponent {
    public counter: number = 10;
  
    increasyBy(value: number): void {
      this.counter += value;
    }
    resetCounter() {
      this.counter = 10;
    }
}