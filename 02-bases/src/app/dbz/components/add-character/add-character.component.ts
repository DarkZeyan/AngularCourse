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
    // La sentencia debugger se utiliza para detener la ejecución del código y poder depurar
    // el codigo en situaciones donde no se puede hacer con un console.log
    // debugger;

    // Adicionalmente cuando se hace el debug se puede ver el valor de las variables
    // Siempre y cuando sea visible en el scope actual o tenga algun valor

    // Cuando estamos en este punto, se pueden colocar breakpoints que continua
    // la ejecucion hasta el punto deseado

    // Los breakpoints se quedan exactamente en el lugar puesto
    // a pesar de reiniciar el navegador.
    // console.log(this.character);

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit({...this.character}); // Se emite el personaje como un nuevo objeto
    //  Resetear el formulario
    this.character.name = '';
    this.character.power = 0;
  }
}
