import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  // Se crea un arreglo de objetos de tipo Character para enviarlos al componente hijo
  public characters: Character[] = [
    { 'name': 'Goku', 'power': 15000 },
    { 'name': 'Vegeta', 'power': 7500 },
    { 'name': 'Trunks', 'power': 6000 },
  ];

  onNewCharacter(character:Character):void{
    // console.log('Main Page');
    // console.log(character);

    this.characters.push(character);
  }

  onDeleteCharacter(index:number):void{
    // Se elimina el personaje que venga con el index, 1 porque sera solamente ese elemento.
    this.characters.splice(index, 1);
  }

}
