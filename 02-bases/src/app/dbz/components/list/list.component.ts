import { Component, Input } from '@angular/core';
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

}
