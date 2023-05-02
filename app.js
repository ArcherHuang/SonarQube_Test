const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

const connection = mysql.createConnection({
    host: "192.168.1.106",
    user: "root",
    database: "User",
    password: process.env.DB_PWD,
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
