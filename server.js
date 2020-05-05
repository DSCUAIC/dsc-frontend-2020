//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/dsc-front'));

app.get('/*', (req, res) => {
  return res.sendFile(path.join(__dirname + '/dist/dsc-front/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
