const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
}).listen(5000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:5000');
});

/* back end server */
const express = require('express')
const routes = require('./server/routes/index');
const app = express()
const port = 3000

app.use('/api/v2/', routes);
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))