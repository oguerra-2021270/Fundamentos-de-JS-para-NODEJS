//Callhacks

//No se más que una función dentro de otra
//Responde a el tiempo en que se ejecuta

// setTimeout(  function() {
//     console.log('Hola mundo');
// }, 3000);

// console.log('que tal buenas tardes');

// setTimeout(() => {
//     console.log('Kinal informática');
// }, 2000);

const getUserById = (id, callback) => {

    const usuario = {
        id,
        nombre: 'Ostyn'
    }

    // if (id === 20) {
    //     callback(`El usuario con id: ${id}, no existe en la DB`);
    // } else {
    //     callback(null, usuario);
    // }

    //Ternarios
    id === 20
        ? callback(`El usuario con id: ${id}, no existe en la DB`)
        : callback(null, usuario);


}

getUserById(5, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log('Usuario en la base de datos', usuario);
});