const express = require('express');
const app = express();
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "siameseRegis"
})

app.get('/register', (req, res) => {
    db.query("SELECT * FROM register", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

});

app.post('/addregister', (req, res) => {
    const firstName = req.body.firstName;
    const surName = req.body.surName;
    const number = req.body.number;
    const email = req.body.email;
    const design = req.body.design;
    const budget = req.body.budget;

    db.query("INSERT INTO register (firstName, surName, number, email, design, budget) VALUES(?,?,?,?,?,?)",
        [firstName, surName, number, email, design, budget],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted");
            }
        }
    );
})

app.listen('3001', () => {
    console.log('Sever is running on port 3001');
})