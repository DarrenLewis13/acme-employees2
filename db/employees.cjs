const client = require('./client.cjs')

const createEmployee = async(name, is_admin) => {
  try {
    await client.query(`
      INSERT INTO employees (name, is_admin)
      VALUES ('${name}', ${is_admin}); 
    `)
  } catch(e) {
    console.log(e);
  }
}

const getEmployees = async() => {
  try {
    const { rows } = await client.query(`SELECT * FROM employees;`);
    return(rows);
  } catch(e) {
    console.log(e);
  }
}

module.exports = { createEmployee, getEmployees };