import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  // Los getters se ven como si fuesen propiedades normales
  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age} años`;
  }

  changeHero():void{
    this.name = 'Spiderman';
  }
  changeAge():void{
    this.age = 25;
  }

}
