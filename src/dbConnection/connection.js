const mongoose = require("mongoose")

const password = '1115Luciana'
const dbname = 'cumtomerscoops'
const uri = `mongodb+srv://walter-rodriguez-dev:${password}@cluster0.btzu7rp.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = ()=> mongoose.connect(uri)