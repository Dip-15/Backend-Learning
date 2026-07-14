const fs = require("fs")
console.log("starting")

fs.writeFile("dip7.txt", "My jaggu please support me to complete again",()=>{
    console.log("done")
    fs.readFile("dip7.txt", (error,data)=>{
        console.log(error , data.toString())
    })
})//this is call-"CAll by HELL" 

fs.appendFile("dip7.txt","\nDip you can do it", (e, d)=>{
    console.log(d)
})

console.log("ending")