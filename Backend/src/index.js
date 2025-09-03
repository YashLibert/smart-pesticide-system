import dotenv from "dotenv"
import connectDB from "./Database/db.js";
import { app } from "./app.js"; 

dotenv.config({
    path: './env'
})

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server Running At Port : ${process.env.PORT}`)
    })
})
.catch((err) =>{
    console.log("MONGO DB CONNECT FAILED !!! ", err);
})