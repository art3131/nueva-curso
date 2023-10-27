const miPromesa = new Promise((resolve, reject)=>{
setTimeout(()=>{
    resolve("hola")
}, 3000)})

miPromesa
.then((info)=>{
    console.log(info)
})
.catch((error)=>{
    console.log(error)
})
.finally (()=>{
    console.log("ejecuto si o si")
})