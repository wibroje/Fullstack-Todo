
//SERVER SIDE JAVASCRIPT



				//\\
			   //  \\
			  //    \\
			 //SETUPS\\
			//_________________________
const express = require('express'),
bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;









			    //\\
			   //  \\
			  //    \\
			 //ROUTES\\
		    //__________________________
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});	












app.listen(port, ()=> {
  console.log(`IT'S OVER ${port}!!!!!`);
});