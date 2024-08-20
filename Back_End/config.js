const mongoose = require('mongoose');
const  connect = mongoose.connect("mongodb://localhost:27017/Thoes");
connect.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("db not conected");
})
const loginScheme = new mongoose.Schema({
    email : {
    type:String,
    require:true,
    },
    pass:{
        type:String,
        require:true,
    }
    
})
const collection = new mongoose.model("studentRegister",loginScheme);
module.exports = collection;