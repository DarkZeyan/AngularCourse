export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Samsung Galaxy A54',
    price: 350
}

const tablet: Product = {
    description: 'iPad Air 2020',
    price: 500
}

interface taxCalculationOptions{
    tax: number;
    products: Product[];
}

// const shoppingCart = [phone, tablet];
// const tax = 0.16;

// La desestructuracion de argumentos de interfaces se hace con
// la sintaxis {propiedad1, propiedad2, ...}:interfaz

// function calculateTax({tax, products}:taxCalculationOptions): number[]{
//     let total = 0;

//     products.forEach(({price}) => {
//         total += price;
//     });

//     return [total, total * tax];
// }
export function calculateTax(options:taxCalculationOptions): number[]{
    let total = 0;

    const {tax, products} = options;

    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];
}

// const result = calculateTax({tax, products: shoppingCart});

// const [total,taxTotal] = result;

// // console.log('Total: ', total );
// // console.log('Tax: ', taxTotal);
