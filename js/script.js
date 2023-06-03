// Darle la bienvenida al jugador
// Pedirle el nombre
// pedir el genero del personaje - que solo acepte femenino o masculino
// preguntar que pokemon llevará el jugador - si no eligió ninguna de las opciones regresará a preguntar otra vez hasta que elija una opción
// RUTA 1 - aparece un pokemon salvaje...
// CONTINUAR - REGRESAR A CASA
// si el jugador regresa a casa = perderse de su primer día como entrenador pokemon
// si el jugador continuar = lanzar pokeball (linea 4) y enfrentarse a un pokemon de ruta
// Si ataca 3 veces = pokemon de ruta gana - Si ataca 1 vez, baja defensa y ataca otra vez = pokemon de ruta pierde - si ataca 2 veces y baja la defensa = pokemon de ruta gana, si baja la defensa y ataca dos veces = pokemon de ruta pierde.
// Mensaje ganador = ¡Has ganado tu primer batalla!
// Mensaje derrota = ¡Tu pokemon no puede seguir combatiendo! --> Decides irte a casa y pierdes tu primer dia como entrenador pokemon.

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
}

let nombre = prompt("¿Cómo te llamas?").toLowerCase()
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
    alert("Decides irte a casa pero otro Pokémon se mete en tu camino... No tienes otra opción que pelear")
    alert("¡Es un Spearow salvaje!")
    break
}
}while (isNaN(primeraRuta) || primeraRuta >=0 || primeraRuta <=3)

let mensajeCombate = "Te lanzas a la batalla junto a" + " " + primerPokemon + " " + "¿Cuál será tu primer movimiento?"
alert(mensajeCombate)

let vidaEnemigo = 4
let ataque
function peleaUno(golpe){
    ataque = vidaEnemigo - golpe
    alert("El pokemon enemigo tiene" + " " + (ataque) + " " + "de vida")
}

let movimiento
let vida
do{
movimiento = prompt("1. Arañazo\n" + "2. Movimiento especial")
if (movimiento === "1"){
    peleaUno(1)
    vida = ataque
    break
}
else if (movimiento === "2"){
    peleaUno(2)
    vida = ataque
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
}

let enemigoVida
let movimientoDos
do{
movimientoDos = prompt("1. Arañazo\n" + "2. Movimiento especial")
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
    alert("¡Has perdido!")
}
else if(enemigoVida == "0"){
    alert("¡Has ganado 30 de dinero!")
}