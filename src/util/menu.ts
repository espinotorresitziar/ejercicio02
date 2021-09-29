import { leerTeclado } from '../util/entradaTeclado'

export let menu = async () => {
    let num: number
    console.log('\n')
    console.log('1.- Suma')
    console.log('2.- Resta')
    console.log('3.- Multiplicación')
    console.log('4.- División')
    console.log('0.- Salir')
    console.log('\n')
    num = parseInt( await leerTeclado('Elija una opción: ') )
    return num
}