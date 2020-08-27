//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = async(base, limite = 10) => {

    if (!Number(base)) {
        throw new Error(`El valor introducido ${base} no es un número`);
    }

    if (!Number(limite)) {
        throw new Error(`El valor introducido ${limite} no es un número`);
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.blue);
    }

};

let crearArchivo = async(base, limite = 10) => {

    if (!Number(base)) {
        throw new Error(`El valor introducido ${base} no es un número`);
    }

    if (!Number(limite)) {
        throw new Error(`El valor introducido ${limite} no es un número`);
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw new err;
    });

    return `tabla-${base}.txt`;

};

module.exports = {
    crearArchivo,
    listarTabla
};