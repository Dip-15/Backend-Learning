const fs = require("fs")
//This imports Node.js's built-in File System (fs) module.

console.log("starting")

fs.writeFile("dip7.txt", "My jaggu please support me to complete again",()=>{
    console.log("done")
    fs.readFile("dip7.txt", (error,data)=>{
        console.log(error , data.toString())
    })
})//this is call-"CAll by HELL" 

fs.appendFile("dip7.txt","\nNext line Dip you can do it", (e, d)=>{
    console.log(d)
})

console.log("ending")