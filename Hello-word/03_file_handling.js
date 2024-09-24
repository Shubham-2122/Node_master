// file to create and read , write
// node js fs module inbuit and file kam kari sakya
const fs = require("fs");

// file crete ki or first para file name new and second will be write code
//  Sync ... 
// fs.writeFileSync("./test.txt",'Hello word');


// Asyc ..
// fs.writeFile("./test.txt",'Hello word Async',(err)=>{})

// Sync and Async 
// blocking and unlocking
// this some server creted use to 

// Read file
// utf :- standerd conding
// sync use ek varibale use :- return kar deta direct
//  const result = fs.readFileSync("./Contacts.txt","utf-8")
//  console.log(result)

// async  and read :- return callback function compusry use
// fs.readFile("./Contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log('error',err)
//     }
//     else{
//        console.log(result) 
//     }
// })

// if apped method use not a worte mode use becuse overid method
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// incomimg address ipaddresand log file use
fs.appendFileSync("./test.txt", `${Date.now()}hey there \n`);

// copy file any of content
// fs.cpSync('./test.txt','./copy.txt');

// means (unlink) delete file sync direct delete file
// fs.unlinkSync("./copy.txt")

// bites file modify and id some of use
console.log(fs.statSync('./test.txt'))
// true and false file is not or yes
// console.log(fs.statSync('./test.txt').isFile())

// folder banva mate use recursi funtiojn
// fs.mkdirSync("my-docs")
// inner folder use
// fs.mkdirSync('my-docss/a/b',{recursive:true})