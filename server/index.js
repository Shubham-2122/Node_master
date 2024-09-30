// index file main use to approaches
// http server banava

const http = require("http")
const fs = require("fs");
const url =require("url")
// console.log(http)


function myHandler(req,res){
     // console.log("new Req Rec.");
    // console.log(req.headers);
    // console.log(req)

    // if you server end request chage server will restart code
    // res.end("hello From server Again")

    if(req.url ===  "/favicon.ico") return res.end();
    // i will log start i will use to log file entery how many time user entry
    const log = `${Date.now()} : ${req.url} ${req.method} New Req Received\n`;

    const myUrl = url.parse(req.url,true);
    // console.log(myUrl)
    
    fs.appendFile('log.txt', log, (err, data) => {
        // switch case use
        // multi routes to use
        switch (myUrl.pathname) {
            case "/":
               if(req.method == 'GET')  res.end("HomePage");
                break;
            case "/about":
                const username = myUrl.query.myname
                res.end(`I, ${username} `);
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end('here are your results for ' + search)
                break;
            case "/signup":
                if(req.method === "GET") res.end("This is a signup Form");
                else if(req.method === "POST"){
                    //DB Query
                    res.end("Successfully...")
                }
                break;
            default:
                res.end("404 Not Found")
        }
        // Switch phela user karva mate
        // res.end("hello From server Again")
    });
}

// webserver creted
// arrow funtion request mate
const myServer = http.createServer(myHandler);

// port jarur pade defult pc ma che aamne aetle
myServer.listen(8000, () => console.log("Serve Started!"));

// node index.js
// and package in under start and "node index.js" cmd :- npm start
// server non-blocking karva vadhre saru rese
