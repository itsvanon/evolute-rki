const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const mysql = require("mysql2");
const e = require("express");

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}));

app.use(session({
    key: "userId",
    secret: "evolute",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60,
    }
}))

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "evolute-rki",
});

app.get("/login", (req, res) => {
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({ loggedIn: false })
    }
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT username, password FROM user WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if(err) {
                res.send({ err: err })
            }

            if(result.length > 0) {
                req.session.user = result;
                console.log(req.session.user);
                res.send(result);
            }
            else {
                res.send(
                    {
                        message: "Wrong Username/Password"
                    }
                );
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Running on PORT 3001");
});