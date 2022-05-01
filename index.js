const express = require('express');

const cors = require('cors')
const app =  express();
const port  = process.env.PORT || 5000; 

app.get ('/', (req, res)=> {
    res.send('Hello from my smarty Pant ==> ')
} )

app.use(cors())

app.use(express.json)



const users = [
        {id:1, name: 'Sabana ', email:'Sabana@gamil.com', phone: '0178888888'},
        {id:2, name: 'Bobita ', email:'SabanaBobita@gamil.com', phone: '0178888888'},
        {id:3, name: 'suchorita ', email:'suchorita@gamil.com', phone: '0178588888'},
        {id:4, name: 'Moushumi ', email:'Moushumi@gamil.com', phone: '0178883888'},
        {id:5, name: 'Munmun ', email:'Munmun@gamil.com', phone: '0178888883'},
        {id:6, name: 'Bipasha ', email:'Bipasha@gamil.com', phone: '0178885888'},
        {id:7, name: 'Shabnoor ', email:'Shabnoor@gamil.com', phone: '0178688888'},
];


app.get('/users', (req, res)=> {
   if(req.query.name){
        const search = req.query.name;
        const matched = user.filter(user => user.name.toLowerCase().includes(search))
        res.send (matched)
   }
   else {
    res.send(users)
   }
})

app.get('/user/:id', (req,res)=> {
    console.log(req.params);
    const id =  parseInt(req.params.id); 
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res)=>{
    console.log('request', req.body)
    const user = req.body; 
    user.id= users.length + 1; 
    users.push(user);
    res.send(user);
})

app.listen(port, ()=> {
    console.log(`example app listening on port`, port)
})


