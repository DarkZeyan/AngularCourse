// let skills = ['Bash','Counter','Healing', true, 123]; // Esto especificara todos los tipos de datos compatibles con el arreglo

const skills:string[] = ['Bash','Counter','Healing']; // Al hacer esto, los tipos de datos que no sean string seran marcados con un error

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // Se puede hacer una declaracion opcional con el ?:
    // hometown: string | undefined; // Adicionalmente, tambien se puede declarar opcionalmente de esta forma
}


const zeyan:Character = {
    name: 'Zeyan',
    hp: 95,
    skills: ['Bash','Counter']
}

zeyan.hometown = 'Chihuahua'; // Se puede asignar un valor a una propiedad opcional posteriormente

console.table(zeyan);

export {};