import { Component } from '@angular/core';


import { Character } from '../interfaces/character.interface';
import { DBZCharactersService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  // // Se crea un arreglo de objetos de tipo Character para enviarlos al componente hijo
  // public characters: Character[] = [
  //   { 'name': 'Goku', 'power': 15000 },
  //   { 'name': 'Vegeta', 'power': 7500 },
  //   { 'name': 'Trunks', 'power': 6000 },
  // ];

  // onNewCharacter(character:Character):void{
  //   // console.log('Main Page');
  //   // console.log(character);

  //   this.characters.push(character);
  // }

  // onDeleteCharacter(index:number):void{
  //   // Se elimina el personaje que venga con el index, 1 porque sera solamente ese elemento.
  //   this.characters.splice(index, 1);
  // }

  // Para solucionar el problema de los servicios, se crea una instancia de la clase del servicio en el constructor
  // La inyeccion de dependencias se hace directamente en el constructor
  // como parametro

  // posteriormente, se utliza la variable dbzCharactersService para acceder a las propiedades y metodos del servicio
  constructor(private dbzCharactersService: DBZCharactersService) {

  }

  // Los servicios nunca deben ser publicos, deben ser privados.

  // Entonces debido a esto ahora se puede acceder a los personajes a traves de la propiedad characters
 // establecida con un get, en el caso de las funciones, se accede a traves de los metodos del servicio
  get characters(): Character[] {
    return this.dbzCharactersService.characters;
  }

  onNewCharacter(character: Character): void {
    this.dbzCharactersService.onNewCharacter(character);
  }

  deleteCharacterByID(id: string): void {
    this.dbzCharactersService.deleteCharacterByID(id);
  }

}
