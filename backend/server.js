const dotenv = require("dotenv");
// const http = require('http')
const app = require("./app");
const { createCon } = require("./config/database.js");

// config the environment
dotenv.config({ path: "backend/config/config.env" });

// connecting to database
createCon();

app.listen(process.env.PORT, () => {
  console.log(
    `server started on PORT ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
