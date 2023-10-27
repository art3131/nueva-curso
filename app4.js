const fs = require('node:fs/promises')

async function leerArchivo (){
try{
    const datos = await fs.readFile('texto.txt', {encoding: "utf-8"})
    console.log(datos)
} catch(error){
    console.log("hubo un error")
} finally {
    console.log("se ejecuta si o si")
}
}

leerArchivo()