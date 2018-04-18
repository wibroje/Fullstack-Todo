const express = require('express'),
bodyParser = require('body-parser');
//SERVER SIDE JAVASCRIPT



				//\\
			   //  \\
			  //    \\
			 //SETUPS\\
			//_________________________

var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

var port = 3000;

const db = require('./models')
const Todo = require('./models/todo')


			    //\\
			   //  \\
			  //    \\
			 //ROUTES\\
		    //__________________________
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});	

app.get('/api/list', function (req, res) {
  Todo.find(function(err, items){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(items);
  }); 
});

app.post('/api/list', function (req, res) {
	let newTodo = new Todo({ task: req.body.task });
	newTodo.save().then(function(result){
		console.log(result)
		res.redirect('/')
	})
});










app.listen(port, ()=> {
  console.log(`IT'S OVER ${port}!!!!!`);
});