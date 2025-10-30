// class Teclado {
//     marca = 'Red Dragon';
//     modelo = 'K552-RGB-BA';
//     tipo = 'Mecanico';
//     conexion = 'USB';
//     iluminacion = 'RGB';

//     switches() {
//         return 'Los switches son Outemu Blue';
//     }
//     velocidadRespuesta() {
//         return 'La velocidad de respuesta es de 1ms';
//     }
// }


// const teclado1 = new Teclado();
// document.write(`Marca: ${teclado1.marca} <br>`);
// document.write(`Modelo: ${teclado1.modelo} <br>`);
// document.write(`Tipo: ${teclado1.tipo} <br>`);
// document.write(`Velocidad de respuesta: ${teclado1.velocidadRespuesta()} <br>`);


// const teclado2 = new Teclado();
// document.write(`<br>Marca: ${teclado2.marca} <br>`);
// document.write(`Modelo: ${teclado2.modelo} <br>`);
// document.write(`Tipo: ${teclado2.tipo} <br>`);
// document.write(`Switches: ${teclado2.switches()} <br>`);


// // pa usar la clase teclado pero cambiar sus valores


// const teclado3 = new Teclado();
// teclado3.marca = 'Logitech';
// teclado3.modelo = 'G Pro X';
// teclado3.tipo = 'Mecanico';
// teclado3.switches = function() {
//     return 'Los switches son Logitech GX Blue';
// }
// teclado3.velocidadRespuesta = function() {
//     return 'La velocidad de respuesta es de 0.9ms';
// }

// document.write(`<br>Marca: ${teclado3.marca} <br>`);
// document.write(`Modelo: ${teclado3.modelo} <br>`);
// document.write(`Tipo: ${teclado3.tipo} <br>`);
// document.write(`Switches: ${teclado3.switches()} <br>`);
// document.write(`Velocidad de Respuesta: ${teclado3.velocidadRespuesta()} <br>`);

// //teylork was here

// class Animal {
//   constructor(nombre, tipo) {
//     this.nombre = nombre;
//     this.tipo = tipo;
//   }
//   emitirSonido() {
//     console.log("El animal emite un sonido");
//   }
// }

// class Perro extends Animal {
//   constructor(nombre, tipo, raza) {
//     super(nombre, tipo);
//     this.raza = raza;
//   }
//   emitirSonido() {
//     console.log("El perro ladra");
//   }
//   correr() {
//     console.log(`${this.nombre} corre alegremente`);
//   }
// }

// const perro1 = new Perro("Bobby", "Perro", "Pug");

// console.log(perro1);
// perro1.correr();
// perro1.emitirSonido();

// perro1.nuevoMetodo = function () {
//   console.log("Este es un metodo");
// };

// Perro.prototype.segundoMetodo = function () {
//   console.log("Es otro nuevo metodo");
// };

// Animal.prototype.tercerMetodo = function () {
//   console.log("Un metodo mas");
// };

const userDatabase = [
    {
        username: 'andres123',
        password: 'securePass!45'
    },
    {
        username: 'maria_smith',
        password: 'mypassword2024'
    },
    {
        username: 'john_doe',
        password: 'johnsSecret99'
    }
]

const usersTimeline = [
    {
        username: 'andres123',
        timeline: 'Me encanta programar en JavaScript!'
    },
    {
        username: 'maria_smith',
        timeline: 'Hoy aprendí sobre programación orientada a objetos.'
    },
    {
        username: 'john_doe',
        timeline: 'Estoy trabajando en un proyecto de Node.js.'
    },
    {
        username: 'linda_k',
        timeline: 'JavaScript es mi lenguaje favorito para el desarrollo web.'
    }
];

const username = prompt('Ingrese su nombre de usuario:');
const password = prompt('Ingrese su contraseña:');

function usuarioExiste(username, password) {
    for (let i = 0; i < userDatabase.length; i++) {
        if (userDatabase[i].username === username &&
            userDatabase[i].password === password) {
            return console.log('Es correcto');
            break;
        } else {
            return console.log('No es correcto');
        }
    
    }
}