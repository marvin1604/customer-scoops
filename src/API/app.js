const express = require("express")
const app = express()

//ROUTES
const routes = require("./routes/index.router")
app.use(routes)

//STATIC FILES
app.use(express)

app.listen(3000, () =>{
    console.log("servidor a la espera de conexion")
})
