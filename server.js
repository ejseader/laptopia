const express = require('express');
const PORT = process.env.PORT || 3000;
// const public_routes = require('./controllers/public_routes');
// const auth_routes = require('./controllers/auth_routes')
// const private_routes = require('./controllers/private_routes');
// const db = require('./config/connection');
const routes = require('./routes');
const { engine } = require('express-handlebars');

const app = express();

app.use(express.static('public'));

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(routes);

db.sync().then(() => {
  app.listen(PORT, () => console.log('Server started on port %s', PORT))
});