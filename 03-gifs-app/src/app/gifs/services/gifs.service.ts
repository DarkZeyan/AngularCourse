import { Injectable } from '@angular/core';


// Cuando se trabaja con el provideIn root
// se hace que este servicio quede disponible en toda la aplicación
// y los modulos que se vayan creando que utilicen este servicio

// Si no estuviese el providedIn root, se debe importar en el modulo
// en el apartado de providers y si otros lugares lo necesitan se debe exportar

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];



  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory]; // Como los arreglos en javascript se pasan como referencia, se hace una copia del arreglo para que no se modifique el original
  }


  searchTag(tag: string):void {

    this._tagsHistory.unshift(tag);
  }
}
