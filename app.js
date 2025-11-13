// express framework
const express = require('express');
const app = express();

//fs allow interacting with file system
const fs = require('fs');

// sets port
const port = 3000;

// helpers
const bodyParser = require('body-parser');
const parser = bodyParser.json();
var obj;

// sets file path used
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: false}));

// opens web page
app.get('/', (req, res) => {
    res.send("index.html");
})

// Turns form into JSON string format and saves in new file
app.post('/submit', parser, (req, res) => {
    obj = req.body;
	fs.writeFile('bookings.json', JSON.stringify(obj), err => {
	  if (err) return console.log(err);
	  console.log('saved');
	});
    
    //tells user the form has successfully sent
    res.send('Form Submitted successfully, press back button on browser.');
	console.log(req.body);
});

// directs node js to port 3000 instanciated earlier 
app.listen(port, () => {
    console.log('server running on http://localhost:3000')
})
