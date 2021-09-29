import { leerTeclado } from './util/entradaTeclado'
import { menu } from './util/menu'

let main = async () => {
    let num: number
    do {
        num = await menu()
        switch(num) {
            case 1:
                console.log('\n')
                console.log("Cálculo de una suma")
                let num1s, num2s: number
                num1s = parseInt (await leerTeclado("Introduzca el primer número"))
                num2s = parseInt (await leerTeclado("Introduzca el segundo número"))
                let suma = sum(num1s, num2s)
                console.log(`\nLa suma de ${num1s}+${num2s} es ` +suma)
                break
            case 2:
                console.log('\n')
                console.log("Cálculo de una resta")
                let num1r, num2r: number
                num1r = parseInt (await leerTeclado("Introduzca el primer número"))
                num2r = parseInt (await leerTeclado("Introduzca el segundo número"))
                let resta = res(num1r, num2r)
                console.log(`\nLa resta de ${num1r}-${num2r} es ` +resta)
                break
            case 3: 
                console.log('\n')
                console.log("Cálculo de una multiplicación")
                let num1m, num2m: number
                num1m = parseInt (await leerTeclado("Introduzca el primer número"))
                num2m = parseInt (await leerTeclado("Introduzca el segundo número"))
                let multiplicacion = multi(num1m, num2m)
                console.log(`\nLa multiplicación de ${num1m}x${num2m} es ` +multiplicacion)
                break
            case 4:
                console.log('\n')
                console.log("Cálculo de una división")
                let num1d, num2d: number
                num1d = parseInt (await leerTeclado("Introduzca el primer número"))
                num2d = parseInt (await leerTeclado("Introduzca el segundo número"))
                let division = div(num1d, num2d)
                console.log(`\nLa división de ${num1d}/${num2d} es ` +division)
                break
            case 0: 
                console.log('\n')
                console.log("Adiós")
                break
            default: 
                console.log('\n')
                console.log("Opción incorrecta")
                break
        }
    } while (num != 0)
}

let sum = (num1s:number, num2s: number) => {
    let s=0;
    s=num1s+num2s
    return s
}

let res = (num1r:number, num2r: number) => {
    let r=0;
    r=num1r-num2r
    return r
}

let multi = (num1m:number, num2m: number) => {
    let m=0;
    m=num1m*num2m
    return m
}

let div = (num1d:number, num2d: number) => {
    let d=0;
    d=num1d/num2d
    return d
}

//Invocamos a la función
main();