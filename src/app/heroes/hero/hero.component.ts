import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Noé';
  public age: number = 590;

  //Propiedad que a su vez es un metodo
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeHero(): void {
    this.name = 'Gedeón';
  }
  changeAge(): void {
    this.age = 20;
  }
  resetForm(): void {
    this.name = 'Noé';
    this.age = 590;

    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // })
  }
}