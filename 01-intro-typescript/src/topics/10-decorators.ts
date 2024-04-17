/* Los decoradores son funciones especiales que se adjuntan a diferentes objetos */

/*  Los decoradores se utilizan para modificar clases, métodos, propiedades y parámetros de una función */

function classDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T
){
    return class extends constructor{
        newProperty = 'new property';
        hello = 'override';
    }
}

// Los decoradores nos ayudan en Angular
// Para añadir nuevas funcionalidades a clases sin tener
// que modificar la estructura original y tampoco extenderla

@classDecorator
export class SuperClass{
    
    public myProperty: string = 'ABC123';

    print(){
        console
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);