// require('dotenv').config({path:'./env'})
console.log("Server starting...");
import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import {app} from './app.js'
dotenv.config({
    path: './.env'
})

connectDB()

/* approach 1 for connecting database inside the index file directly
import express from "express"
const app = express()
//remember that errors might mostly occur during connection with a database 
;(async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror",(error)=>{
            console.log("ERRR:",error);
            throw error //application cannot connect to the database
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        }) 
    }
    catch(error)
    {
        console.log("ERROR: ",error)
        throw err
    }
}) ()  //-' are just for cleaning purposes
   */