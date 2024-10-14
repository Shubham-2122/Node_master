const express = require("express");
const fs =require("fs");
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

// middleware ;-  plugin
// app.use(express.urlencoded({extended:false}));
// request to object convert to 

// middleware next refe
app.use((req,res,next)=>{
    // req hold data
    // console.log("Hello from middleware 1");
    // res end kari 
    // return res.json({msg:"Hello from middleware 1"})
    fs.appendFile('log.txt',`\n${Date.now()}: ${req.ip} : ${req.method}: ${req.path}\n`,(err,data)=>{
        next();
    })
    // next();
})


// app.use((req,res,next)=>{
    
//     console.log("Hello from middleware 2");
//     // res to the end
//     // return res.end("hey")
//     next();
// })




// Route
// this method get

// this html data to use
app.get("/users",(req,res)=>{
    // this html return
    const html = `
        <ul>
            ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
        <ul>
    `;
    res.send(html)
})

// json data to live view
app.get("/api/users",(req,res)=>{
    return res.json(users)
})

// group  routing multipling use easy work.
app.route('/api/users/:id').get((req,res)=>{
    // id ne number convert kariyou
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json(user)
}).put((req,res)=>{
    //  Edit user with id 
    return res.json({status :"Pending"})
})
.delete((req,res)=>{
    //  Delete user with id 
    return res.json({status :"Pending"})
})

// dynamic path parameter (this are megren process so not will single )
// app.get("/api/users/:id",(req,res)=>{
//     // id ne number convert kariyou
//     const id = Number(req.params.id);
//     const user = users.find((user)=> user.id === id);
//     return res.json(user)
// })

// create new user
app.post("/api/users",(req,res)=>{
    const body = req.body;
    // store and id will incress
    users.push({...body,id:users.length + 1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        // TODO : crearte new user
        return res.json({status:"success",id:users.length})
    })
    console.log('Body' ,body)

})


// this same path so i will marge
// update id
// app.patch("/api/users/:id",(req,res)=>{
//     // TODO : Edit the user with id
//     return res.json({status:"Pending"})
// })

// // delete user/id
// app.delete("/api/users/:id",(req,res)=>{
//     // TODO : Delete the user with id
//     return res.json({status:"Pending"})
// })



app.listen(PORT,()=> console.log(`Server Started at PORT:${PORT}`))