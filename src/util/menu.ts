import { leerTeclado } from '../util/entradaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Suma')
    console.log('2.- Resta')
    console.log('3.- Multiplicación')
    console.log('4.- División')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}