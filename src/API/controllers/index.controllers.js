const controller = {}

controller.index= (req,res) =>{
    res.send("la conexion fue exitosa desde index.controllers");
}
 module.exports = controller

// (req,res)=>{
//     res.send("la conexion fue exitosa desde index.routes");
// }

// const conection = require('../dbConnection/connection')

// controller.index = async(req, res) =>{
//     try{
//         const title = "Index desde el servidor"
//         await conection()
//         res.render("index", {title})
//     }catch(err){
//         console.log(err)
//     }
// }

// module.exports = controller

// mongodb+srv://walter-rodriguez-dev:<password>@cluster0.btzu7rp.mongodb.net/?retryWrites=true&w=majority