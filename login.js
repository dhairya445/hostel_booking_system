const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const { Console } = require('console');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2004',
  database: 'web'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});
console.log("Connection:"+connection);
app.get("/",(req,res)=>{
  res.render('login');
  });
  app.get("/home",(req,res)=>{
          res.render('home');
          });
  app.get("/bidholi",(req,res)=>{
          res.render('bidholi');
              });
  app.get("/kandoli",(req,res)=>{
          res.render('kandoli');
                  });
  app.get("/dunga",(req,res)=>{
          res.render('dunga');
                      });
  app.get("/ah",(req,res)=>{
      res.render('ah');
          });
  app.get("/am",(req,res)=>{
      res.render('am');
           });
  app.get("/book",(req,res)=>{
      res.render('book');
          });
  app.get("/db",(req,res)=>{
      res.render('db');
          });
  app.get("/gg",(req,res)=>{
      res.render('gg');
                  });
  app.get("/kb",(req,res)=>{
      res.render('kb');
                      });
  app.get("/kk",(req,res)=>{
      res.render('kk');
          });
  app.get("/pg",(req,res)=>{
      res.render('pg');
           });
  app.get("/pt",(req,res)=>{
      res.render('pt');
          });
  app.get("/sh",(req,res)=>{
      res.render('sh');
          });
  app.get("/sp",(req,res)=>{
      res.render('sp');
          });
  app.get("/ws",(req,res)=>{
      res.render('ws');
          });

app.post('/login', (req, res) => {
  const uname = req.body['username'];
  const password = req.body['password'];
  const querry = 'SELECT password FROM credential WHERE username = ?';
  connection.query(querry, [uname],function (err, results) {

    if (results.length > 0) {
      results.forEach((row) => {
      const pass= (`${row.password}`);
    if (password === pass){
        res.render('home');
      }
    else{
      res.render('login');
    }
      })
    } 
});
});


// book
app.post('/book', (req, res) => {
  const name = req.body['name'];
  const email = req.body['email'];
  const phone = req.body['phone'];
  const hostel = req.body['hostel'];
  const session = req.body['session'];
  const year = req.body['year'];
  const querry = 'INSERT INTO book VALUES(?,?,?,?,?,?)';
  connection.query(querry, [name, email, phone, hostel, session, year],function (err, results) {
    if (err) {
      throw err;
    }
    else{
      res.render('home');
    }
});
});
app.listen(port, () => {
  console.log('Server running on port 3000');
});
