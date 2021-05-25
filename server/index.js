const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

// if dev mode 
app.use(cors());

const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'wild'
});




app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/schools', (req, res) => {
    connection.query(
        'SELECT id, name FROM `school`',
        function (err, results) {
            if (err) {
                res.status(500).send('Error mysql');
            }
            res.send(results)
        }
    );
})

app.get('/schools/:id', (req, res) => {
    const {id} = req.params;
    connection.query(
        'SELECT * FROM `school` WHERE id = ?', 
        [id],
        function (err, results) {
            if (err) {
                res.status(500).send('Error mysql');
            }
            res.send(results[0]);
        }
    );
})

app.get('/schools/:id/wizards', (req, res) => {
    const {id} = req.params;
    connection.query(
        'SELECT * FROM `wizard` WHERE school_id = ?',
        [id],
        function (err, results) {
            if (err) {
                res.status(500).send('Error mysql');
            }
            res.send(results);
        }
    )
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})