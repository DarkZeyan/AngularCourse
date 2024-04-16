
// Se tiene que evitar el any en TypeScript
// ya que puede eliminar cualquier restricción de tipo en TypeScrpt/
// Funcion generica

/// La funcion generica nos ayuda a forzar un tipo de dato aunque no tengamos certeza
// Adicionalmente podemos recibir cualquier tipo de dato, y hacer algo para cada tipo especifico.
export function whatsMyType<T>(argument:T):T{
    return argument;
}

let amIString = whatsMyType<string>('Hola Mundo'); // Se puede forzar el generico
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' ')); // Con el generico recibimos todos los metodos de los genericos 
// de acuerdo a su tipo de dato
console.log(amINumber.toFixed())
console.log(amIArray.join('-'));