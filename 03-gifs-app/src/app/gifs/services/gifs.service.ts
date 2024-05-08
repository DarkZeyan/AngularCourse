import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../components/interfaces/gifs.interfaces';


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
  private  _gifList: Gif[] = [];
  constructor(private http:HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory]; // Como los arreglos en javascript se pasan como referencia, se hace una copia del arreglo para que no se modifique el original
  }

  get gifList() {
    return [...this._gifList];
  }

  private organizedHistory(tag: string){
    tag = tag.toLowerCase(); // Se convierte a minusculas para poder hacer el filtrado
    //Se evalua si el tag ya existe en el arreglo
    if( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag ); // Si existe entonces se filtra el tag que ya existia
    }

    this._tagsHistory.unshift(tag); // se agrega al principio del arreglo
    this._tagsHistory = this._tagsHistory.splice(0,10); // Se limita a 10 elementos
    this.saveLocalStorage(); // Se guarda en el local storage
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

      // La interfaz no se le coloca a la respuesta del observable, sino a la propiedad get.

      // Las interfaces en typescript no fuerzan a que los objetos tengan una estructura
      // Para tener la seguridad de que un objeto tenga una estructura, se debe hacer una clase que implemente esa interfaz
    this.http.get<SearchResponse>(`${this._serviceUrl}/search?`,{params})
      .subscribe( (resp) => {
        this._gifList = resp.data;
      });
  }


  // hacer uso de local storage
  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  // cargar la informacion del local storage
  private loadLocalStorage():void{
    const temp_history = localStorage.getItem('history');
    if(temp_history){
      this._tagsHistory = JSON.parse(temp_history);
      if( this._tagsHistory.length === 0) return;
      this.searchTag(this._tagsHistory[0]);
    }
  }
}
