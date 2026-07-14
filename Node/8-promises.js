import  fs from "fs/promises"

let a = await 
fs.readFile("dip7.txt")
console.log("Before:")
console.log(a.toString())

// let b = 
// await fs.writeFile("dip7.txt", "\nThis is amazing promises")

let b = await fs.appendFile("dip7.txt", "\nThis is amazing promises");
console.log("After:")
console.log(a.toString(), b)
// console.log()