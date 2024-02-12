let express = require('express');
let app = express();
console.log('Hello World');
app.get('/', function(req, res) {
  let path = '/views/index.html';
  res.sendFile(__dirname + path);
})

app.use('/public', express.static(__dirname+'/public'))
function logging(req, res, next){
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
}
app.use(logging);

app.get('/json', (req, res)=>{  
  if (process.env.MESSAGE_STYLE === "uppercase") {
  res.json({"message": "Hello json".toUpperCase()});
  } else {
    res.json({"message": "Hello json"});
  }
})

app.get('/now', (req, res, next)=>{
  req.time = new Date().toString();
  next();
}, (req, res)=>{
  res.json({time:req.time});
});




































 module.exports = app;
