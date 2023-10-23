//const persona = {
//    nombre: "ivan",
//    apellido: "benitez",
//    edad: 20,
//    dni: 1234567
//}
//
//const {nombre, apellido, edad} = persona
//
//const persona2= {
//    ...persona,
//    edad:21
//}
//console.log(`La persona ${nombre} ${apellido} tiene ${edad} años de edad.`)
//
//

const numeros =[1,2,3,4,5,6,7,8,9,10,11,12]
//filter
const pares =  numeros.filter((num)=>!(num % 2))
const impares = numeros.filter((num)=>(num % 2))
console.log(pares)
//const pares = []

//for (let i = 0; i < numeros.length; i++){
//    if (!(numeros[i]%2)){
//        pares.push(numeros[i])
//    }
//}   trae numeros pares

//map
const doble = numeros.map((num)=> num *2)

console.log(doble)
console.log(numeros)
console.log(pares)
console.log(impares)



let miNumero = numeros.find((num)=> num === 2)

console.log(miNumero)