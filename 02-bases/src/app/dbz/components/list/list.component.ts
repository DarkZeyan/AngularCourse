import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // El decorador @Input() permite recibir datos desde el componente padre
  // En este caso, el componente padre es MainPageComponent
  @Input()
  public characterList: Character[] = [
    {'name': 'Gohan', 'power': 300},
  ];

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  // Se crea un metodo para manejar la eliminacion de personajes
  onDeleteCharacter(id?:string):void{
    // TODO: Emitir el ID del personaje

    if(!id) return;

    console.log({id});
    this.onDelete.emit(id);
  }

}
