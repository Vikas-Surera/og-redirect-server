const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

app.get('/', function(request, response) {
  console.log('Home page visited!');
    const data = '<!DOCTYPE html><html lang="en"><head>'
        + '<meta property="og:title" content="This is title" />'
        + '<meta property="og:description" content="This is description" />'
        + '<meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png" />'
        + '<meta property="og:url" content="https://vikassurera.com" />'
        + '<meta property="og:type" content="article" />'
        + '<meta http-equiv="refresh" content="1; url=https://codeat21.com/wp-content/uploads/2021/03/CodeAT21-Logo.png" />'
        +'</head></html>';
    return response.send(data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
