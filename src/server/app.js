const express = require("express")
const cors = require("cors")

const app = express()
const port = 3000
app.use(cors());

// const path = require('path')

//ROUTES
const routes = require("./routes/index.router")
app.use("/api", routes)

//STATIC FILES
// app.use(express.static(path.join(__dirname,"../../public")))

// app.use((req,res)=>{
//     res.sendFile(path.join(__dirname, "../../public/404.html"))
// })

// const controller = require("./controllers/index.controllers")
// get("/", controller.index)
// app.get("/", (controller.index))


app.listen(port, () =>{
    console.log("servidor esta corriendo correctamente");
})
