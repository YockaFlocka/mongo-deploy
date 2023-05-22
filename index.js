const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.port || 3001;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}!`);
  });
});

/*
1. Create a home page and make sure it loads locally
2. Create an atlas account
3. Write down the password Atlas gives you
4. Set the IP address to 0.0.0.0/0
5. Get the connection string from Atlas
  - Paste in your password in that string

6. Set up project on Heroku
7. Connect to GitHub Repo where project is stored
8. Add a Config var called MONGODB_URI and give it the connection string from Atlas
*/