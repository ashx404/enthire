const app = require("express")();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
var db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "enthire"
});

// app.get("/createdb", (req, res) => {
//   let sql = "CREATE DATABASE enthire";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Database created");
//   });
// });

app.get("/search1", (req, res) => {
  let sql = `SELECT * FROM posts WHERE title LIKE '${req.query.query}%'`;
  console.log(sql);
  db.query(sql, (err, result) => {
    if (err) throw err;
    let arr = [];
    //sending only 25 results
    for (let index = 0; index < 25; index++) {
      if (result[index]) {
        arr.push({ name: result[index].title });
      } else {
        break;
      }
    }
    res.send(arr);
  });
});

app.get("/search2", (req, res) => {
  console.log(req.query.str);
  let sql = `SELECT * FROM posts2 WHERE title LIKE '${req.query.query}%'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    let arr = [];
    for (let index = 0; index < 25; index++) {
      if (result[index]) {
        arr.push({ name: result[index].title });
      } else {
        break;
      }
    }
    res.send(arr);
  });
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.listen(8888, (req, res) => {
  console.log("Listening on 8555");
});
