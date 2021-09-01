var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
	host	: 'localhost',
	user 	: 'root',
	database: 'registration_test'
})

app.get("/", function(req, res){
	var q = "SELECT COUNT(*) AS count FROM users_reg";
	connection.query(q, function(error,result){
		if (error) throw error;
		var count = result[0].count;
		res.render("home", {count: count});
	});
});

app.post("/register", function(req,res){
	var person = {user_name: req.body.user_name, user_fname: req.body.user_fname, user_lname: req.body.user_lname, birthday: req.body.birthday, email: req.body.email};
	connection.query('INSERT INTO users_reg SET ?', person, function(err, result) {
		if (err) throw err;
		res.redirect("/");
	})
});

app.listen(3000, function() {
	console.log("Server running on 3000!");
});