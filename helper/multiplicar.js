const fs = require('fs');
const colors = require('colors')
const crearArchivo = async ( base = 5, listar = false, inicio = 1, final = 10 ) => {

    try {
        let salida = '';
        consola = '';

        for (let i=inicio; i <= final; i++) {
            salida  += (`${base} x ${i} = ${base*i}\n`);
            consola += (`${base} ${'x'.blue} ${i} ${'='.blue} ${base*i}\n`);
        }
        if (listar) {
            console.log(consola);
        }

        fs.writeFileSync(`./out/tabla-${base}.txt`,salida)
        
        return (`La tabla del ${base} fue creada`);
    } catch (err) {
        throw err;
        
    }

    
}

module.exports = {
    crearArchivo
}