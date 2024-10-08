const express = require("express");
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

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
    // TODO : crearte new user
    return res.json({status:"Pending"})
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