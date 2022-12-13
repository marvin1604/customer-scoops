const http = require("http")
const server = http.createServer((req, res)=>{
    console.log("cliente se ha conectado");
    res.end("la conexion fue exitosa")
})

server.listen(3000, ()=>{
    console.log("servidor a la espera de conexiones");
})