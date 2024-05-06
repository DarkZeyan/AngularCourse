import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  //  Para los formularios se recomienda evitar completamente el Two way Data Binding
  public character: Character = {
    name: '',
    power: 0
  };
}
