import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetButton(10)">Reset</button>
<button (click)="decreaseBy(-1)">-1</button>
  `,
})

export class CounterComponent {
  constructor() {
  }

public title: string = 'firstApp';
public counter: number = 0;

increaseBy(value: number): void {
  this.counter += value;
}

decreaseBy(value: number): void {
  this.counter--;
}

resetButton(value: number): void {
  this.counter = value; // reset the counter to 10
}
}
