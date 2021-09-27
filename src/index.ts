import { leerTeclado } from "./util/entradaTeclado";

console.log("Hola")

let main = async () => {
    const valor = await leerTeclado('¿Cuál es tu edad?')
    console.log(`Tienes ${valor} años`)
    if (valor < 18) {
        console.log("Eres menor de edad")
    } else {
        console.log("Eres mayor de edad")
    }
}

//Invocamos a la función
main();