//EJERCICIOS ARRAY PT1

// #1 CREA UN ARRAY LLAMADO FRUTAS QUE CONTENGA AL MENOS 5 NOMBRES DE FRUTAS DIFERENTES

let frutas = ["mango", "banano", "pera", "melon", "zapote"]

// #2 UTILIZA UN BUCLE FOR PARA RECORRER EL ARRAY FRUTAS E IMPRIMIR CADA ELEMENTO EN LA CONSOLA.

for (let i=0; i<frutas.length; i++) {
    console.log(frutas[i])
} //el LENGTH se utiliza para recorrer el arreglo.

// #3 UTILIZA UN FOREACH PARA RECORRER EL ARRAY FRUTAS E IMPRIMIR CADA FRUTA EN MAYÙSCULA EN LA CONSOLA.

frutas.forEach(element => {
    console.log(element.toUpperCase())
    
})

// #4 CREA UN ARRAY LLAMADO NÙMEROS QUE CONTENGA LOS NÙMEROS DEL 1 AL 10.

let numeros = [1,2,3,4,5,6,7,8,9,10]
console.log(numeros)

// #5 UTILIZA UN BUCLE WHILE PARA RECORRER EL ARRAY NÙMEROS E IMPRIMIR CADA ELEMENTO EN LA CONSOLA.

let i = 0 //inicializar el ìndice para el bucle while
while (i<numeros.length) {
    console.log(numeros[i]);
    i++
    
}
 
// #6 AGREGA UNA NUEVA FRUTA AL FINAL DEL ARRAY FRUTAS

frutas.push("guayaba") 
console.log(frutas)

// #7 ELIMINA EL SEGUNDO ELEMENTO DEL ARRAY NÙMEROS

delete numeros[1]
console.log(numeros)

// #8 INVIERTE EL ORDEN DE LOS ELEMENTOS EN EL ARRAY FRUTAS (frutas.reverse)

console.log(frutas.reverse())

// #9 ORDENA EL ARRAY NÙMEROS EN ORDEN DESCENDENTE (numeros.reverse)????

console.log(numeros.reverse())

