const client = require('./client.js')
const { createEmployee } = require('./employees.js')

const dropTables = async() => {
  try {
    await client.query(`DROP TABLE IF EXISTS employees;`);
  } catch(e) {
    console.log(e);
  }
}

const createTables = async() => {
  try {
    await client.query(`
      CREATE TABLE employees (
         id SERIAL PRIMARY KEY,
         name VARCHAR(50) NOT NULL,
         is_admin BOOLEAN NOT NULL
      );
    `);
  } catch(err) {
    console.log(err);
  }
}
const syncAndSeed = async() => {
  await client.connect();
  console.log('CONNECTED');

  await dropTables();
  console.log(`drop table`);

  await createTables();
  console.log('TABLES CREATED');

  await createEmployee(`Mike`, false);
  console.log(`created employee`);

  await createEmployee(`Ashley`, true);
  console.log(`created employee`);

  await client.end();
  console.log(`disconnected`);
}

syncAndSeed();
