
import mongoose  from "mongoose";

const Connection = async (username,passoword)=>{

    const URL=`mongodb+srv://${username}:${passoword}@cluster0.fp4sg0j.mongodb.net/`;
    try{
       await mongoose.connect(URL)
       console.log("DataBase Connected");
    }catch(error){
        console.log("error",error.massage)
    }
}
export default Connection;