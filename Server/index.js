const express = require("express");
const app = express();

const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "evolute-rki",
});

app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO user (uid, fname, lname, emailid, phno) VALUES ('123456', 'Varun', 'Menon', 'varunrichpeace@gmail.com', 7022619689);";
    db.query(sqlInsert, (err, result) => {
        if (err) throw err;
        res.send("Inserted into the DB");
    });
});

app.listen(3001, () => {
    console.log("Running on PORT 3001");
});