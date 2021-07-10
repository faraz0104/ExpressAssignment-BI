import express from'express'
const app = express();
import userRoutes from "./router/user.js"
import bodyparser from"body-parser"
import fs from "fs"

app.use(bodyparser.json());
app.use("/student",userRoutes);// each url is assigned to different function


//creating routes
app.get("/",(req,res) =>{
    res.status(200).send("welcome to home")
});

//endpoint to get list of user
app.get("/student/getDetail", (req,res) =>{
    fs.readFile( "student.json", "utf-8", (err,data) =>{
         res.send(data);
    })
});
    



//listening to server
app.listen(3000, () =>{
    console.log("listening to server")
});