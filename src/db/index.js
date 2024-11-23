import mongoose from "mongoose";
import  { DB_NAME } from '../constants.js';

const connectDB = async () =>{
    try{
        //Since mongoose.connect() returns a Promise (a process that takes time), await makes the code pause here until the connection is successful.
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        //mongoose gives us a return object , usko hm store krenge
        // mongoose.connect () returns an object containing information about the connection.
        console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`);
    //.host specifically gives the host name of the MongoDB server (e.g., localhost or a cloud server address).
    }
    catch(error){
        console.log("MONGODB connection error" ,error);
        process.exit(1)
    }
    //in nodejs we get a direct access to use process
    //process is jo current hamari application chal rhi h na uska reference h yeh
}

export default connectDB;