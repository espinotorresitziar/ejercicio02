import { leerTeclado } from './util/entradaTeclado'
import { menu } from './util/menu'

const main = async () => {
    let n: number
    do {
        n = await menu()
        let num1, num2: number
        num1 = parseInt (await leerTeclado("Introduzca el primer número"))
        num2 = parseInt (await leerTeclado("Introduzca el segundo número"))
        
        switch(n) {
            case 1:
                console.log("Cálculo de una suma")
                let suma = sum(num1, num2)
                console.log(`La suma de ${num1}+${num2} es ` +suma)
                break
            case 2:
                console.log("Cálculo de una resta")
                let resta = res(num1, num2)
                console.log(`La resta de ${num1}-${num2} es ` +resta)
                break
            case 3: 
                console.log("Cálculo de una multiplicación")
                let multiplicacion = multi(num1, num2)
                console.log(`La multiplicación de ${num1}x${num2} es ` +multiplicacion)
                break
            case 4:
                console.log("Cálculo de una división")
                let division = div(num1, num2)
                console.log(`La división de ${num1}/${num2} es ` +division)
                break
            case 0: 
                console.log("\nAdiós")
                break
            default: 
                console.log("Opción incorrecta")
                break
        }
    } while (n != 0)
}

const sum = (num1:number, num2: number) => {
    let s=0;
    s=num1+num2
    return s
}

const res = (num1:number, num2: number) => {
    let r=0;
    r=num1-num2
    return r
}

const multi = (num1:number, num2: number) => {
    let m=0;
    m=num1*num2
    return m
}

const div = (num1:number, num2: number) => {
    let d=0;
    d=num1/num2
    return d
}

//Invocamos a la función
main();