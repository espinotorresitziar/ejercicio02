import { leerTeclado } from "./util/entradaTeclado";

console.log("Hola")

let main = async () => {
    let edad: number
    const valor = await leerTeclado('¿Cuál es tu edad?')
    edad = parseInt (valor)
    console.log(`Tienes ${valor} años`)
    if (edad < 18) {
        console.log("Eres menor de edad")
    } else {
        console.log("Eres mayor de edad")
    }
}

//Invocamos a la función
main();