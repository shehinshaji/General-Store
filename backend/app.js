const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  // Set CORS headers so that the React SPA is able to communicate with this server
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/products', productRoutes);
app.use('/', authRoutes);

// mongodb.connect('mongodb+srv://omnistack:omnistack@cluster0-tb9ng.mongodb.net/omnistack8?retryWrites=true&w=majority',
// { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected!');
//     client.close();
//   })
//   .catch(err => {
//     console.log(err);
//   });

db.initDb(function(err, db) {
  if (err) {
    console.log(err);
  } else {
    app.listen(3100);
  }
});

// app.listen(3100);
