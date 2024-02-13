const mysql = require("mysql");
const dotenv = require("dotenv");

// config the environment
dotenv.config({ path: "backend/config/config.env" });

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});

// Connect to MySQL
function createCon() {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    }
    console.log("Connected to MySQL!", `host on ${process.env.DB_HOST}`);
  });
}

module.exports = { createCon, connection };
