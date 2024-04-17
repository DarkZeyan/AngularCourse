export interface Passenger{
    name:string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Jorge'
}

const passenger2: Passenger = {
    name:'Romi',
    children: ['Reira', 'Carter' ]
}

// const printChildren = (passenger: Passenger): void => {
//     const howManyChildren = passenger.children?.length || 0;
//     console.log( passenger.name, howManyChildren);
// }
const returnChildrenCount = (passenger: Passenger): number => {
    // Si colocamos el !, estamos diciendo que estamos seguros que el valor siempre se recibira
        // En esta ubicacion se llama Non Null Assertion Operator
    
    const howManyChildren = passenger.children!.length;
    console.log( passenger.name, howManyChildren);

    return howManyChildren;
}

// printChildren(passenger1);
returnChildrenCount(passenger1);