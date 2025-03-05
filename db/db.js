import mongoose from "mongoose"


function Connect(){
    
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected to Mongodb");
    })
    .catch(err =>{
        console.log(err);
    })
}

export default Connect;