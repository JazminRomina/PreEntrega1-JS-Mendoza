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
do{
nombre = prompt("¿Cuál es tu nombre?").toLowerCase().trim()
}while (nombre === "")
let genero = prompt("¿Personaje femenino o masculino?")
alert(personaje(nombre, genero))

let bienvenida = "¡Bienvenido al mundo de Pokémon: Edición Rojo Fuego!"
alert(bienvenida)
let mensajeLaboratorio = "Te encuentras al frente del laboratorio Pokémon... ¿Estás listo para elegir a tu primer compañero?"
alert(mensajeLaboratorio)
let mensajePokemon = "El Profesor Oak te muestra 3 Pokémon para elegir, si ninguno te convence, puedes seleccionar la cuarta opción y el Profesor te entregará otro Pokémon."
alert(mensajePokemon)

function elegirPokemon(){
    let pokemon
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
