let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
//const ejs = require('ejs'); // Import the ejs module
let app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//let ejs = require('ejs');
const port = 3001;

app.use(express.static('./public'));
// serve from public

let names = []; // Array to store names

app.get('/', (req, res) => {
  // send the names to the template
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.post('/add-name', (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.redirect('/');
  });
// New route to list all names
app.get('/names', (req, res) => {
    res.json(names);
  });
  
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
