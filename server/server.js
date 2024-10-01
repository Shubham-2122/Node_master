// express just fremawork using http request
// Basic routing
// Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

// Each route can have one or more handler functions, which are executed when the route is matched.

// Route definition takes the following structure:

// app.METHOD(PATH, HANDLER

const http = require("http")
const express = require("express")
// express use server easy
// console.log(http)

const app = express();

app.get('/',(req,res)=>{
    return res.send('Hello From Home page')
})

app.get('/about',(req,res)=>{
    // return res.send('Hello From About page' + " hey " + req.query.name + " you are " + req.query.age)
    return res.send(`Hello From About page hey  ${req.query.name}  you are  ${req.query.age}`)
})




// handle request function
// const myServer = http.createServer(app)

// myServer.listen(8000, () => console.log("Serve Started!"));

app.listen(8000,()=> console.log("Server Started!"))
