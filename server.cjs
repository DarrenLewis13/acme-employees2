const express = require('express');
const app = express();
const client = require('./db/client.cjs');
const { getEmployees } = require('./db/employees.cjs');

client.connect();

app.use(express.static('dist'));

app.get('/api/v1/employees', async(req, res, next) => {
  try {
    const employees = await getEmployees();
    res.send(employees);
  } catch (e) {
    console.log(e);
  }
})

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`server on`)});