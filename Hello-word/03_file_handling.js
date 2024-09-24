// file to create and read , write
// node js fs module inbuit and file kam kari sakya
const fs = require("fs");

// file crete ki or first para file name new and second will be write code
//  Sync ... 
// fs.writeFileSync("./test.txt",'Hello word');


// asyc ..
fs.writeFile("./test.txt",'Hello word Async',(err)=>{})

// Sync and Async 
// blocking and unlocking
// this some server creted use to 