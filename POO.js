class Teclado {
    marca = 'Red Dragon';
    modelo = 'K552-RGB-BA';
    tipo = 'Mecanico';
    conexion = 'USB';
    iluminacion = 'RGB';

    switches() {
        return 'Los switches son Outemu Blue';
    }
    velocidadRespuesta() {
        return 'La velocidad de respuesta es de 1ms';
    }
}


const teclado1 = new Teclado();
document.write(`Marca: ${teclado1.marca} <br>`);
document.write(`Modelo: ${teclado1.modelo} <br>`);
document.write(`Tipo: ${teclado1.tipo} <br>`);
document.write(`Velocidad de respuesta: ${teclado1.velocidadRespuesta()} <br>`);


const teclado2 = new Teclado();
document.write(`<br>Marca: ${teclado2.marca} <br>`);
document.write(`Modelo: ${teclado2.modelo} <br>`);
document.write(`Tipo: ${teclado2.tipo} <br>`);
document.write(`Switches: ${teclado2.switches()} <br>`);


// pa usar la clase teclado pero cambiar sus valores
const teclado3 = new Teclado();
teclado3.marca = 'Logitech';
teclado3.modelo = 'G Pro X';
teclado3.tipo = 'Mecanico';
teclado3.switches = function() {
    return 'Los switches son Logitech GX Blue';
}
teclado3.velocidadRespuesta = function() {
    return 'La velocidad de respuesta es de 0.9ms';
}

document.write(`<br>Marca: ${teclado3.marca} <br>`);
document.write(`Modelo: ${teclado3.modelo} <br>`);
document.write(`Tipo: ${teclado3.tipo} <br>`);
document.write(`Switches: ${teclado3.switches()} <br>`);
document.write(`Velocidad de Respuesta: ${teclado3.velocidadRespuesta()} <br>`);

//teylork was here