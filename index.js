// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./src/db/index.js";
// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
// -r dotenv/config --experimental-json-modules

dotenv.config({
    path: './env'
})


connectDB()








// import  express  from "express";
// const app =express()
// (async ()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGOOB_URL}/${DB_NAME}`)
//         app.on("error",(error)=> {
//             console.log("ERROR:", error);
//         })

//         app.listen(process.env.PORT,()=.{
//             console.log(`app is listing on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("ERROR:",error)
//         throw err
//     }
// })()