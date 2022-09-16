
const { crearArchivo } = require('./helper/multiplicar');
const  argv = require('./config/yarg')
const colors = require('colors')
// const base = 5;
console.clear();


// console.log(process.argv);
// console.log(argv);
// console.log('Base: ', argv.base);
crearArchivo(argv.b, argv.l, argv.i, argv.f) 
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch(err => console.log(err))