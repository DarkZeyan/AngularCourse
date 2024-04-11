//Si las variables no cambian, usar tipado de const.

const name = 'Zeyan'; // TypeScript infiere los tipados de manera automatica
//En el caso de las constantes, el intellisense nos indica el valor que tiene almacenado.
//  name = 123; // Los errores con TypeScript son mostrados en tiempo de escritura
let hpPoints: number | 'FULL' = 95   ; // Se puede especificar el tipo de dato que se espera
// Se pueden asignar multiples tipos de dato a una variable usando el caracter de tuberia
// Adicionalmente, se puede asignar un valor por defecto a la variable que permite que la variable sea de otro tipo pero con el valor asignado

const isAlive: boolean = true;


console.log({name, hpPoints, isAlive});

hpPoints= 'FULL'; // Error en tiempo de escritura No se puede asignar un string a una variable de tipo number
export{};