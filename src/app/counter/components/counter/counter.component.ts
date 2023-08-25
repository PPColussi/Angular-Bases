import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3> {{counter}} </h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetBy()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>`
})

export class counterComponent {
  public counter: number = 28;
  increaseBy(value: number):void {
    this.counter += value;
}
  resetBy():void {
    this.counter = 28;
}
}
