// node js first use client side start / server use 
// client request to a server nodejs 
// Event Queue :- user1 request :- first quese :- line ma aavse
// pachi Event Loop ;- machine event loop check request 
// Queue request hatana

// Event in two type :- Blocking operations and non blocking operations

// blocking(Sync-task) 
    // -> Thread pool(worker)
    // --> thread store for use (Thread worker if aviable so work it)
    //  Return result after threa (limetd (total 4)(proper size ))
    // 5 user enter tab problem (server wait blocking) 

// non-blocking(Asyc-task)
    // -> Simple request to use for non- blocking request



const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// file crete ki or first para file name new and second will be write code
//  Sync ... Blocking..request
// fs.writeFileSync("./test.txt",'Hello word');


// Asyc .. non- blocking request
// fs.writeFile("./test.txt",'Hello word Async',(err)=>{})


// console.log("1")

// // blocking...request
// // Tread blocking side
// blocking request data ne holad karse data priunt and next print stement
// const result = fs.readFileSync("./Contacts.txt","utf-8")
// console.log(result)

// console.log("2")


// console.log("1")

// non- blocking...request
// file ready thase tyre aavse
// non - blocking request hold ni kare data ne 
// fs.readFile("./Contacts.txt","utf-8",(err,result)=>{
//     console.log(result)
// })

// console.log("2")
// console.log("3")
// console.log("4")



// defult thread pool size = 4 
// max? CPU Core 8 core :- 8 core
// my pc will 4 core


