const express = require("express");
const app = express();
const PORT = 80;

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.get("/", (req, res) => {
	res.send({ items : ["item 1", "item 2", "item 3", "item 4"]});
});

app.listen(PORT, () => {
	console.log("API Server is RUNNING...");
});
