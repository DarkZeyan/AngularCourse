import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'


import { Character } from '../interfaces/character.interface';


//Injectable es el decorador de los servicios. Se utiliza para inyectar dependencias en una clase.
@Injectable(
  {
    providedIn: 'root'
  } // providedIn: 'root' significa que el servicio sera unico en toda la aplicacion
  // Si no declararamos este provideIn, tendriamos que importar el servicio en el modulo de la aplicacion

)
export class DBZCharactersService {
  // Se crea un arreglo de objetos de tipo Character para enviarlos al componente hijo
  public characters: Character[] = [
    { id:uuid(),'name': 'Goku', 'power': 15000 },
    { id:uuid(),'name': 'Vegeta', 'power': 7500 },
    { id:uuid(),'name': 'Trunks', 'power': 6000 },
  ];

  onNewCharacter(character: Character): void {
    // console.log('Main Page');
    // console.log(character);
    const newCharacter:Character = {'id':uuid(),...character};
    console.log(newCharacter);
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   // Se elimina el personaje que venga con el index, 1 porque sera solamente ese elemento.
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterByID(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }

} // El proposito de usar un servicio es poder manejar la data de una forma mas organizada y reutilizable
