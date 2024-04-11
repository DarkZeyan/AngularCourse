function addNumbers(a:number,b:number):number{ // En el caso de las funciones el intellisense nos indica el tipo de dato que se retorna
    // En typescript, si no se indica el tipo de dato que se espera, se asume que es de tipo any
    // Si no sabemos el tipo de dato que se espera, se puede usar any, pero no es recomendable, ya que se pierde la ventaja de usar TypeScript
    // Adicionalmente, usando any, se pierde la capacidad de detectar errores en tiempo de escritura y soltara un warning
    return a + b;
};


// Cuando se define el tipo de dato de los argumentos, los argumentos se vuelven obligatorios

// addNumbers(1,2); // Se puede llamar a la funcion sin problemas
// addNumbers(1); // Error en tiempo de escritura, se espera un segundo argumento

// Se puede definir el tipo de dato que se espera que retorne la funcion

const addNumbersArrow = (a:number,b:number):string => {
    return `${a + b}`; // Error en tiempo de escritura, se espera un numero y se esta retornando un string
}


const result:number = addNumbers(1,2); // Al asignar el resultado de la funcion a una variable, se puede ver el tipo de dato que se espera
// const result:string = addNumbers(1,2).toString(); // Adicionalmente se puede especificar que se espera otro tipo de dato, pero en caso de esto habra que converitr el tipo de dato;

const result2:string = addNumbersArrow(1,2); 

function multiply(firstNumber:number, secondNumber?:number, base:number = 2):number{
    return firstNumber * base;
}

const multiplyResult:number = multiply(5);



console.log({result}); // Se colocan las llaves para imprimir como un objeto y poder ver el tipo de dato que recibio

console.log({result2});
console.log({multiplyResult});

export {}; //Este paso es innecesario en Angular, pero es necesario en TypeScript para evitar conflictos de variables con el mismo nombre