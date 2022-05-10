const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'emp_db'
})

mysqlConnection.connect((err)=>{
    if(!err){
    console.log('DBConnection Succeded.');
    console.log('hi how are you');
    }else
    console.log('DBConnection Failed\n Error ' + JSON.stringify(err, undefined, 2));
})

//get data from sql database
app.get('/biodata',((req, res)=>{
    mysqlConnection.query('Select * from biodata', (err, rows, fields)=>{
        if(!err){
            //console.log(rows[3].name);
            res.send(rows);
        }else{
            console.log(err);
        }
    })
}))

//get specific via name data from sql database
app.get('/biodata/:id',(req, res)=>{
    mysqlConnection.query('Select * from biodata where Name = ?',[req.params.id],(err, rows, fields)=>{
        if(!err){
            //console.log(rows[3].name);
            //console.log(req.params.id);
            res.send(rows);
        }else{
            console.log(err);
        }
    })
})

//delete data from hte mysql database;
app.delete('/biodata/:id',async (req, res)=>{
    mysqlConnection.query('delete from biodata where name = ?',[req.params.id], (err, rows, fields)=>{
        if(!err){
            console.log('deleted successfully');
            res.send('deleted successfully');
        }else{
            console.log(err);
        }
    })
})

//insert into biodata
app.post('/biodata', (req, res, next)=>{
    const product = req.body;
    query="insert into biodata(name,address) values(?,?)";
    mysqlConnection.query(query,[product.name, product.address],(err, results)=>{
        if(!err){
            console.log("inserted successfully....")
            //return res.status(200),json({message:"product added successfully"});
        }else{
            console.log(err)
            //return status(500).json(err);
        }
    });
});
//update 
app.patch('/biodata/:id',(req, res)=>{
    const id=req.params.id;
    const updateData=req.body;
    var query = "UPDATE biodata SET address = ? WHERE name = ?";
    mysqlConnection.query(query,[updateData.address, id],(err, results)=>{
        if(!err){
            console.log('updated successfully');
            res.send('updated successfully');
        }else{
            console.log(err);
        }
    })
})
console.log(__dirname);

app.listen(3000,()=>console.log("express server is running on port no 3000"));

