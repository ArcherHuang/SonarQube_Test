const express = require('express')
import mysql from 'mysql2';

const app = express()
const port = 3000

const connection = mysql.createConnection({
    host: "192.168.1.106",
    user: "root",
    database: "User",
    password: "Qwer1234",
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/repositories/:userQuery', async (req, res) => {
//     const {data} = req.params;
//     const query = 'SELECT * FROM Repository WHERE TAG = '${data}' AND public = 1';
//     const [rows] = await connection.query(query);
//    res.json(rows);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
