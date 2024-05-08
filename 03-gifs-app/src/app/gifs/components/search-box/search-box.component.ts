import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template:`
  <h5>Buscar: </h5>
  <input type="text"
    name=""
    id=""
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
  >
  `
})
export class SearchBoxComponent {

  // Se puede utilizar el keyup.enter para detectar cuando se presiona la tecla enter
  // es un evento propio de angular para detectarlo y funciona
  // como una alternativa a la directiva @ViewChild

/*
  ViewChild y ViewChildren son directivas que enlazan el resultado
  final de la vista del componente baado en el predicado a la propiedad de la clase del componente.
  No aplica a directivas estructurales como *ngIf o *ngFor.

  Syntax:
  @ViewChild( predicate, options ) myChildComponen;
  @ViewChildren( predicate, options ) myChildComponents;
*/
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){

  }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    // Despues de enviarlo al servicio se limpia.
    this.tagInput.nativeElement.value = '';
  }
}
