import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  // Al igual que el Input, el Output puede recibir un alias para ser visto de manera externa
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  //  Para los formularios se recomienda evitar completamente el Two way Data Binding
  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    console.log(this.character);

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    //  Emitir el personaje
    this.character.name = '';
    this.character.power = 0;
  }
}
