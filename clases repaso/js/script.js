let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3;
let vidasEnemigo = 3;
let mascotaJugadorSeleccionada = false;

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
		let botonSeleccionar = document.getElementById('boton-mascota')
    
    if (inputHipodoge.checked) {
				botonSeleccionar.disabled = true
        spanMascotaJugador.innerHTML = 'Hipodoge'
        mascotaJugadorSeleccionada = true;
    } else if (inputCapipepo.checked) {
				botonSeleccionar.disabled = true
        spanMascotaJugador.innerHTML = 'Capipepo'
        mascotaJugadorSeleccionada = true;
    } else if (inputRatigueya.checked) {
				botonSeleccionar.disabled = true
        spanMascotaJugador.innerHTML = 'Ratigueya'
        mascotaJugadorSeleccionada = true;
    } else {
        alert('Selecciona una mascota')
        return
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    if (!mascotaJugadorSeleccionada) {
        alert("Elige una mascota para poder atacar")
        return
    }
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
    crearMensaje()
}
function ataqueAgua() {
    if (!mascotaJugadorSeleccionada){
        alert("Elige una mascota para poder atacar")
        return
    }
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
    crearMensaje()
}
function ataqueTierra() {
    if (!mascotaJugadorSeleccionada){
        alert("Elige una mascota para poder atacar")
        return
    }
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
    crearMensaje()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
}

function combate() {

	const spanVidasJugador = document.getElementById('vidas-jugador')
	const spanVidasEnemigo = document.getElementById('vidas-enemigo')

	if (ataqueJugador == ataqueEnemigo) return "EMPATE"

	if ( 
		(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') ||
		 (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') ||
		  (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') 
		) {

		vidasEnemigo--
		spanVidasEnemigo.innerHTML = vidasEnemigo
	
		return "GANASTE"
		}

		vidasJugador--
		spanVidasJugador.innerHTML = vidasJugador
		return "PERDISTE"

} 

function crearMensaje() {

		const resultado = combate()

    let contenedorMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ', ' + resultado;

    contenedorMensajes.appendChild(parrafo)

		if (vidasEnemigo == 0) {
			cambiarEstadoBotones()
			alert("Ganaste el juego")
		} else if (vidasJugador == 0) {
			cambiarEstadoBotones()
			alert("Perdiste el juego")
		}

    reiniciaerJuego()
}
function reiniciaerJuego() {
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.style.display = 'block'
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function reiniciarJuego() {
    let contenedorMensajes = document.getElementById('mensajes')
    contenedorMensajes.innerHTML = ''
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.style.display = 'none'
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function cambiarEstadoBotones() {
	const botonFuego = document.getElementById('boton-fuego')
	const botonAgua = document.getElementById('boton-agua')
	const botonTierra = document.getElementById('boton-tierra')
	const botonSeleccionar = document.getElementById('boton-mascota')
	
	botonSeleccionar.disabled = true
	botonFuego.disabled = true
	botonAgua.disabled = true
	botonTierra.disabled = true
}

window.addEventListener('load', iniciarJuego)