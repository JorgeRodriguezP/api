const express = require('express'),
app = express(),
http = require('http').Server(app),
bodyParser = require('body-parser'),
cors = require('cors'),
config = require('./config/config'),
db = require("./database/database"),
init = require('./init/init1')



//jobs 
init.createEjercicio()
// init.createRole()
// init.createInventory()
//=======

//init.createStudent()

//app.use(express.json({ limit: "10000mb" }));
//app.use(express.urlencoded({ limit: "10000mb", extended: true }));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use("/api", require('../mvc/routes/index'))

http.listen(config.port, () => {
  console.log('Server is running in port', config.port);
});
