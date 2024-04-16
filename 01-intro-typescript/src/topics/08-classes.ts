export class Person {
    //Definir clases en TypeScript de esta manera no es normal, en Angular se hace de otra manera
    // public name: string;
    // private address: string;
    
    // constructor(name: string, address: string) {
    //     this.name = name;
    //     this.address = address;
    // }

    //En TypeScript se hace de esta forma


    // La inyeccion de dependencias se hace en el constructor.
    constructor(public name: string, private address: string = 'Sin dirección') {
        this.name = name;
        this.address = address;
    }
}


// Extends viene de la herencia de clases
// Hay que priorizar la composición sobre la herencia
export class Hero extends Person{
    constructor(
        public alterEgo:string,
        public age: number,
        public realName: string,
    ){
        super(realName, 'New York'); // Constructor de la clase padre.

    }
}


const spiderman = new Hero('Spiderman',45, 'Peter Parker');

console.log(spiderman);