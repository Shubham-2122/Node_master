// index file main use to approaches
// http server banava

const http = require("http")
const fs = require("fs")
// console.log(http)


// webserver creted
// arrow funtion request mate
const myServer = http.createServer((req, res) => {
    // console.log("new Req Rec.");
    // console.log(req.headers);
    // console.log(req)

    // if you server end request chage server will restart code
    // res.end("hello From server Again")


    // i will log start i will use to log file entery how many time user entry
    const log = `${Date.now()} : ${req.url} New Req Received\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        // switch case use
        // multi routes to use
        switch (req.url) {
            case "/": res.end("HomePage");
                break;
            case "/about": res.end("I am shubham jadav");
                break;
            default:
                res.end("404 Not Found")
        }
        // Switch phela user karva mate
        // res.end("hello From server Again")
    })
});

// port jarur pade defult pc ma che aamne aetle
myServer.listen(8000, () => console.log("Serve Started!"));

// node index.js
// and package in under start and "node index.js" cmd :- npm start
// server non-blocking karva vadhre saru rese
