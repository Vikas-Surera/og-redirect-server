const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  console.log('Home page visited!');
  const filePath = path.join(__dirname, 'public', 'index.html');
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, 'Home Page');
      data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
      data = data.replace(/\$OG_URL/g, "https://codeat21.com/wp-content/uploads/2021/03/CodeAT21-Logo.png");
    result = data.replace(/\$OG_IMAGE/g, 'https://codeat21.com/wp-content/uploads/2021/03/CodeAT21-Logo.png');
    return response.send(result);
  });
});


app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
