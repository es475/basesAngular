/* import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: '<h1>Hola Counter</h1>'
})
export class CounterComponent {

} */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Bienvenidos a Angular {{counter}}</p>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset(10)">reset</button>
  <button (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent{
  public counter: number;

  constructor(
  ) {
    this.counter = 10;
  }

  increaseBy(value: number): void{
    this.counter += value;
  }

  reset(value: number): void{
    this.counter = value;
  }

}
