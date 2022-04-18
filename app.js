const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const db = require('./app/config/database.js');
const app = express();

var corsOptions = { origin: "http://localhost:8081" };

app.use(cors(corsOptions));
// parse requests of content-type - application/json

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors("*"));

app.use('/', require('./app/routes/hrms.routes'));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to HRMS application." });
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  



