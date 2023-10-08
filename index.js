const express = require("express");
const cors = require('cors');
const app = express();
const port = 9000;
const db= require("./Config/database");
app.use(express.json());     
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(`/Public`,express.static(`Public`));
// app.use(cookieParser());
const router = require ("./Routes/product")
app.use('/api', router);
app.listen(port,function(err){
    if(err){
        console.log("Error in running the server in the port :",port);
    }
    console.log("server is running on the port", port);
});