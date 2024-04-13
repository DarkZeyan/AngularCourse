import { Product, calculateTax } from "./06-function-destructuring";


const shoppingCart: Product[] = [
    {
        description: 'Samsung Galaxy A54',
        price: 150
    },
    {
        description: 'iPad Air 2020',
        price: 200
    }
];

/* Cuando se hace la importacion de alguna clase, interfaz
    funcion o variable, se llama todo el archivo y ejecuta
    Lo cual ocasiona que se ejecute codigo que no se necesita
*/


const [total, taxTotal] = calculateTax({ tax: 0.16, products: shoppingCart });

console.log('Total: ', total);
console.log('Tax: ', taxTotal);