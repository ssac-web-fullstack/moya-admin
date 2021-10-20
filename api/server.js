const express = require('express');
const app = express();
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/api/chat', (req, res) => {
  connection.query('SELECT * from Chat', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.post('/api/chat', (req, res) => {
  const { title } = req.body;

  connection.query(
    `insert into Chat(title) values('${title}');`,
    (error, rows) => {
      if (error) throw error;
      console.log('created');
      // res.send(rows);
    }
  );
});
app.delete('/api/chat/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`DELETE from Chat where id=${id}`, (error, rows) => {
    if (error) throw error;
    console.log('deleted');
    // res.send(rows);
  });
});
app.listen(PORT, () => {
  console.log('Listening on port 8000');
});
