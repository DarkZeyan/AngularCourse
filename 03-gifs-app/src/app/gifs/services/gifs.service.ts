import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


// Cuando se trabaja con el provideIn root
// se hace que este servicio quede disponible en toda la aplicación
// y los modulos que se vayan creando que utilicen este servicio

// Si no estuviese el providedIn root, se debe importar en el modulo
// en el apartado de providers y si otros lugares lo necesitan se debe exportar

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];
  private _apiKey: string = 'c6gCUjBKI0JrnfVk0JSLGqjfldFbsh3c';
  private _serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http:HttpClient) { }

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

  searchTag(tag: string): void{
    if(tag.length === 0) return; // Validacion de que si se envia nada, no se haga nada
    this.organizedHistory(tag);
    // Manera con el fetch API de javascript
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=c6gCUjBKI0JrnfVk0JSLGqjfldFbsh3c&q=valorant&limit=10')
    //   .then( resp => resp.json() )
    //   .then( data => console.log(data))

    // Otro modo de javascript
    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=c6gCUjBKI0JrnfVk0JSLGqjfldFbsh3c&q=valorant&limit=10');
    // const data = await resp.json();
    // console.log(data);

    // Este http es un observable, no es una promesa
    // El observable es un objeto que a lo largo del tiempo puede emitir valores difernetes
    // y se puede subscribir a el para recibir esos valores que emite a lo largo de su vida

    // Podemos utilizar el objeto HttpParams para enviar los parametros de la URL de manera mas ordenada
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit','10')
      .set('q', tag);

    this.http.get(`${this._serviceUrl}/search?`,{params})
      .subscribe( (resp: any) => {
        console.log(resp);
      });
  }
}
