const fs = require('node:fs')

console.log("1) antes de leer el archivo")

fs.readFile('texto.txt', {encoding: "utf-8"}, (error, datos)=>{
    if(error) return console.log("error")
    console.log("2)",datos)
})

console.log("3) despues de leer el archivo")