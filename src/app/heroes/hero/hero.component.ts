import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'IRONMAN';
  public age: number = 46;

  get capitalizedName(): string {
    return this.name.toLowerCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void{
      this.name = 'Thanos';
  }

  changeAge(): void{
    this.age = 24;
  }

  resetForm(): void{
    this.name = 'ironmas';
    this.age = 45;
  }

}
