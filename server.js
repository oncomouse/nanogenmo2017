const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const yaml = require('js-yaml');
const logger = require('morgan');
const livereload = require('livereload');
const livereloadMiddleware = require('connect-livereload');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(logger('dev'));
app.use(livereloadMiddleware({
  port: 35729
}));
app.get('/', (req, res) => {
  const metadata = yaml.load(fs.readFileSync('./metadata.yml'));
  metadata.description = marked(metadata.description);
  var locals = {
    grammar: JSON.parse(fs.readFileSync('./circle.json').toString()),
    metadata
  };
  res.render('template', locals);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

// Create a livereload server
const reloadServer = livereload.createServer({
  // Reload on changes to these file extensions.
  exts: [ 'json', 'ejs', 'js' ],
  // Print debug info
  debug: false
});

// Specify the folder to watch for file-changes.
reloadServer.watch(__dirname);