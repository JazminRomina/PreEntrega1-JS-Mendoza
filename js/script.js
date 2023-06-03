let pregunta
do{
let bienvenida = "Bienvenido al mundo de Pokémon - edición Rojo Fuego."
alert(bienvenida)

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
    alert(personajeCompleto)
    return personajeCompleto
}

let nombre
do{
nombre = prompt("¿Cómo te llamas?").toLowerCase().trim()
} while (nombre === "")

let genero = prompt("¿Personaje feminino o masculino?").toLowerCase()
personaje(nombre, genero)

let laboratorio = "Te encuentras al frente del laboratorio Pokémon... ¿Estás listo para elegir a tu primer compañero?"
alert(laboratorio)
let mensajePokemon = "El Profesor Oak te muestra 3 Pokémon para elegir, si ninguno te convence, puedes seleccionar la cuarta opción y el Profesor te entregará otro Pokémon."
alert(mensajePokemon)
let primerPokemon

do{
    primerPokemon = prompt("1. Bulbasaur\n2. Charmander\n3. Squirtle\n4. Ninguno")
    if (primerPokemon === "1") {
        alert("¡Felicidades! acabaste de recibir un Bulbasaur (Pokémon tipo planta)")
        primerPokemon = "Bulbasaur"
        alert("Guardas a" + " " + primerPokemon + " " + "en su Pokeball y sales del laboratorio.")
        break
    }
    else if (primerPokemon === "2"){
        alert("¡Felicidades! acabaste de recibir un Charmander (Pokémon tipo fuego)")
        primerPokemon = "Charmander"
        alert("Guardas a" + " " + primerPokemon + " " + "en su Pokeball y sales del laboratorio.")
        break
    }
    else if (primerPokemon === "3"){
        alert("¡Felicidades! acabaste de recibir un Squirtle (pokémon tipo agua)")
        primerPokemon = "Squirtle"
        alert("Guardas a" + " " + primerPokemon + " " + "en su Pokeball y sales del laboratorio.")
        break
    }
    else if (primerPokemon === "4"){
        alert("¡Felicidades! acabaste de recibir un Pikachu (pokémon ratón electrico)")
        primerPokemon = "Pikachu"
        alert("Guardas a" + " " + primerPokemon + " " + "en su Pokeball y sales del laboratorio.")
        break
    }
    else{
        alert("¡Debes elegir una de las opciones!")
    }
} while (isNaN(primerPokemon) || primerPokemon >= 0 || primerPokemon <=5)

let salirDelLab = "Ahora mismo te encuentras caminando por la ruta 1 con dirección a la Ciudad verde"
alert(salirDelLab)
let primeraRuta

do{
    primeraRuta = prompt("Mientras caminabas, un Pokémon salvaje aparece y impide que llegues a tu destino. Decides...\n1. Tener tu primera batalla\n2. Irte a casa")
if (primeraRuta === "1"){
    alert("¡El Pokémon que te corta el paso es un Pidgey!")
    break
}
else if (primeraRuta === "2"){
    alert("Decides irte a casa pero otro Pokémon se mete en tu camino... No tienes otra opción que luchar.")
    alert("¡Es un Spearow salvaje!")
    break
}
}while (isNaN(primeraRuta) || primeraRuta >=0 || primeraRuta <=3)

let mensajeCombate = "Te lanzas a la batalla junto a tu" + " " + primerPokemon + " " + "¿Cuál será tu primer movimiento?"
alert(mensajeCombate)

let vidaEnemigo = 3
let ataque
function peleaUno(golpe){
    ataque = vidaEnemigo - golpe
    alert("El Pokémon enemigo tiene" + " " + (ataque) + " " + "de vida")
}

let movimiento
let vida
do{
movimiento = prompt("1. Ataque Normal\n" + "2. Movimiento especial")
if (movimiento === "1"){
    peleaUno(1)
    vida = ataque
    alert("El enemigo se ha aumentado el ataque, el proximo movimiento será mortal...")
    break
}
else if (movimiento === "2"){
    peleaUno(2)
    vida = ataque
    alert("El enemigo se ha aumentado el ataque, el proximo movimiento será mortal...")
    break
}
else{
    alert("¡Debes seleccionar una de las opciones!")
}
} while (isNaN(movimiento) || movimiento >= 0 || movimiento <=3)

let vidaFinal
function peleaDos(golpeFinal){
    vidaFinal = vida - golpeFinal
    alert("El pokemon enemigo tiene" + " " + vidaFinal + " " + "de vida")
    return vidaFinal
}

let enemigoVida
let movimientoDos
do{
movimientoDos = prompt("¿Cuál es tu siguiente movimiento?\n"+ "1. Ataque Normal\n" + "2. Movimiento especial")
if (movimientoDos === "1"){
    peleaDos(1)
    enemigoVida = vidaFinal
    break
}
else if (movimientoDos === "2"){
    peleaDos(2)
    enemigoVida = vidaFinal
    break
}
else{
    alert("¡Debes seleccionar una de las opciones!")
}
} while (isNaN(movimientoDos) || movimientoDos >= "0" || movimientoDos <= "3")

if(enemigoVida == "1" || enemigoVida == "2"){
    alert("El enemigo lanza un tornado quitandote toda la vida... ¡Has perdido!")
}
else if(enemigoVida == "0" || enemigoVida == "-1"){
    alert("El enemigo ha caido... ¡Has ganado!")
}
let mensajeFinal = "Has llegado al final de la BETA..."
alert(mensajeFinal)
do{
pregunta = Number(prompt("¿Quieres volver a jugar?\n 1. Si\n 2. No"))
if (pregunta == 2){
    alert("Se cierra el juego")
    break
}
}while (isNaN(pregunta) || pregunta >=3 || pregunta <= 0)
}while (pregunta == 1)