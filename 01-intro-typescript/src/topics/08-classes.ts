export class Person {
    //Definir clases en TypeScript de esta manera no es normal, en Angular se hace de otra manera
    // public name: string;
    // private address: string;
    
    // constructor(name: string, address: string) {
    //     this.name = name;
    //     this.address = address;
    // }

    //En TypeScript se hace de esta forma

    constructor(public name: string, private address: string = 'Sin dirección') {
        this.name = name;
        this.address = address;
    }
}

const spiderman = new Person('Peter Parker', 'New York');

console.log(spiderman);