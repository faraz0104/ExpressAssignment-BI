import fs from "fs";

export const addUser=(req,res)=>{
    console.log("you are adding a user")
    var student = req.body;
    // pushing detail
    fs.writeFile("student.json" , JSON.stringify(student) , err=>{
        if (err) throw err;
        console.log("User Added")
    })
    res.status(200).send({
        "result":"success"
    })
}

