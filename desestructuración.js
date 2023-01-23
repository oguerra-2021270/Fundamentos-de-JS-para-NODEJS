//Objetos JS
const futbolista = {
    nombre: 'Lionel Messi', 
    equipo: 'PSG',
    altura: 1.69
}

//DESESTRUCTURACIÓN
// const nombreJugador = futbolista.nombre;
// const equipoJugador = futbolista.equipo;
// const alturaJugador = futbolista.altura;

// console.log(futbolista);
// console.log(nombreJugador, equipoJugador, alturaJugador);

//DESESTRUCTURACIÓN DE JS
const { nombre, equipo, altura } = futbolista;
console.log(nombre, equipo, altura);