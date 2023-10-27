const http = require('node:http')

let nombre ="lautaro"

const server = http.createServer((req, res)=>{
    res.end({JSONstringify})
})

server.listen(3000, ()=>{
    console.log("server on port 3000")
})