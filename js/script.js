function personaje(nombre, genero) {
    let validarGenero = true
    while (validarGenero){
        genero = genero.toLowerCase()
    if (genero === "femenino"|| genero === "masculino") {
        validarGenero = false
    }
    else {
        genero = prompt ("Porfavor, ingrese femenino o masculino.")
    }
    }
    let personajeCompleto = "Ficha de entrenador\n" + "Nombre: " + nombre + "\nGénero: " + genero
    return personajeCompleto
}

let nombre
function verificarNombre (){
    nombre = prompt("¿Cuál es tu nombre?").toLowerCase().trim()
    if (nombre === ""){
        verificarNombre()
    }
}
verificarNombre()
let genero = prompt("¿Personaje femenino o masculino?")
alert(personaje(nombre, genero))

let volverAJugar
do{
let bienvenida = "¡Bienvenido al mundo de Pokémon: Edición Rojo Fuego!"
alert(bienvenida)
let mensajeLaboratorio = "Te encuentras al frente del laboratorio Pokémon... ¿Estás listo para elegir a tu primer compañero?"
alert(mensajeLaboratorio)
let mensajePokemon = "El Profesor Oak te muestra 3 Pokémon para elegir, si ninguno te convence, puedes seleccionar la cuarta opción y el Profesor te entregará otro Pokémon."
alert(mensajePokemon)

let pokemon
function elegirPokemon(){
    pokemon = Number(prompt("1. Bulbasaur\n2. Charmander\n3. Squirtle\n4. Ninguno"))
    switch (pokemon){
    case 1:
        alert("¡Felicidades! acabaste de recibir un Bulbasaur (Pokémon tipo planta)")
        pokemon = "Bulbasaur"
        alert("Guardas a" + " " + pokemon + " " + "en su Pokeball y sales del laboratorio.")
        break
    case 2:
        alert("¡Felicidades! acabaste de recibir un Charmander (Pokémon tipo fuego)")
        pokemon = "Charmander"
        alert("Guardas a" + " " + pokemon + " " + "en su Pokeball y sales del laboratorio.")
        break
    case 3:
        alert("¡Felicidades! acabaste de recibir un Squirtle (Pokémon tipo agua)")
        pokemon = "Squirtle"
        alert("Guardas a" + " " + pokemon + " " + "en su Pokeball y sales del laboratorio.")
        break
    case 4:
        alert("¡Felicidades! acabaste de recibir un Pikachu (Pokémon tipo electrico)")
        pokemon = "Pikachu"
        alert("Guardas a" + " " + pokemon + " " + "en su Pokeball y sales del laboratorio.")
        break
    default:
        alert("¡Debes elegir una de las opciones!")
        elegirPokemon()
}
}
elegirPokemon()

let salirDelLab = "Despues de salir del laboratorio, te encuentras caminando por la ruta 1 con destino a la primer Ciudad"
alert(salirDelLab)
let primeraRuta
function opcionRuta (){
    primeraRuta = Number(prompt("Mientras caminabas, un Pokémon salvaje aparece y impide que llegues a tu destino. Decides...\n1. Tener tu primera batalla\n2. Irte a casa"))
    switch(primeraRuta){
        case 1:
            alert("¡El Pokémon que te corta el paso es un Pidgey!")
            break
        case 2:
            alert("Decides irte a casa pero otro Pokémon se mete en tu camino... No tienes otra opción más que luchar.")
            alert("¡Es un Spearow salvaje!")
            break
        default:
            alert("¡Debes seleccionar una de las opciones!")
            opcionRuta()
    }
}
opcionRuta()
let mensajeCombate = "Te lanzas a la batalla junto a tu" + " " + pokemon + " " + "¿Cuál será tu primer movimiento?"
alert(mensajeCombate)


let vidaEnemigo = 3
let vidaActual
function primerBatalla(){
    let elegirAtaque = Number(prompt("1. Ataque Normal\n" + "2. Ataque especial"))
    let ataque
    switch (elegirAtaque){
        case 1:
        ataque = 1
        vidaActual = vidaEnemigo - ataque
        alert("Has dejado a tu enemigo a" + " " + vidaActual)
        break
        case 2:
        ataque = 2
        vidaActual = vidaEnemigo - ataque
        alert("Has dejado a tu enemigo a" + " " + vidaActual)
        break
        default:
        alert("¡Debes elegir uno de los movimientos!")
        primerAtaque()
    }
}
primerBatalla()

vidaEnemigo = vidaActual
alert("¿Cuál será tu siguiente movimiento?")
primerBatalla()

if (vidaActual == 1){
    alert("Tu pokémon ya no puede seguir luchando... ¡Has perdido!")
}
else if (vidaActual == 0 || vidaActual == -1){
    alert("El enemigo ha caido... ¡Has ganado!")
}

let mensajeFinal = "¡Felicidades por llegar al final de la BETA!"
alert(mensajeFinal)

function regresar(){
volverAJugar = Number(prompt("¿Deseas volver a jugar?\n" + "1. Si\n" + "2. No"))
switch (volverAJugar){
    case 1:
    alert("Regresando al inicio...")
    break
    case 2:
    alert("Se cierra el juego")
    break
    default:
    alert("Ingrese un valor válido")
    regresar()
    }
}
regresar()
} while (volverAJugar == 1)