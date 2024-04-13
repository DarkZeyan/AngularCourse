interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mary On A Cross",
    details: {
        author: "Ghost",
        year: 2019
    }
}

// const {song:cancion, songDuration:duration, details:{
//     author,
//     year
// }} = audioPlayer;
// const {song:cancion, songDuration:duration, details} = audioPlayer;
// const {author, year} = details;
// console.log('Song: ', cancion);
// console.log('Duration: ', duration);
// console.log('Author: ', author);
// console.log('Year: ', year);

/* 
    Desestructuracion de arreglos
*/

// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const [, , trunks = 'No encontrado']: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , trunks = 'No encontrado']: string[] = ['Goku', 'Vegeta'];
// const trunks = dbz[3];
// console.log('Personaje 3: ', trunks || 'Personaje no encontrado');
console.log('Personaje 3: ', trunks);



export { };