let express = require('express');
let app = express();
let port = process.env.port || 3000;
// console.log("prev")
require('./dbConnection');
// console.log("prev")
let router = require('./routes/router');
// app.get('/', function (req,res) {
//     res.render('index.html');
// });

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);

app.listen(port, ()=>{
    console.log('express server started');
});