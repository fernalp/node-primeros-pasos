const argv =  require('yargs').
    option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base para  multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('i',{
        alias: 'inicio',
        type: 'number',
        default: 1,
        describe: 'Es el número donde empieza la multiplicación'
    })
    .option('f',{
        alias: 'final',
        type: 'number',
        default: 10,
        describe: 'Es el número donde termina la multiplicación'
    })
    .check( (argv, options) =>{
        if(isNaN(argv.b || argv.f || argv.i)){
            throw 'La base, el inicio y el final tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;