const express = require('express');
var fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

app.get('/getText/:incoming', (req, res)=> {
	let incoming = req.params.incoming;
	fs.readFile(`texts/${incoming}.txt`, 'utf8', function (err, data) {
		res.send({ data});
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
