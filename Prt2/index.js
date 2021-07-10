import express from'express'
const app = express();

app.get("/",(req,res) =>{
    res.status(200).send("welcome to home")
});

app.get("/student/studentList",(req,res) =>{
    res.send({
        result:[
            "Rajesh",
            "Ramesh",
            "Sayali",
            "Sanjana"
        ]
    });
});



app.listen(8080, () =>{
    console.log("listening to server")
});
