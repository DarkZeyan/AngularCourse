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

  private organizedHistory(tag: string){
    tag = tag.toLowerCase(); // Se convierte a minusculas para poder hacer el filtrado
    //Se evalua si el tag ya existe en el arreglo
    if( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag ); // Si existe entonces se filtra el tag que ya existia
    }

    this._tagsHistory.unshift(tag); // se agrega al principio del arreglo
    this._tagsHistory = this._tagsHistory.splice(0,10); // Se limita a 10 elementos
  }

  searchTag(tag: string):void {
    if(tag.length === 0) return; // Validacion de que si se envia nada, no se haga nada
    this.organizedHistory(tag);
  }
}
