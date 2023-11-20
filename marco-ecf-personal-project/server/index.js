
import express from 'express';
import { Sequelize } from 'sequelize';
import routesHandler from './routes/handler.js';
import { urlencoded, json } from 'body-parser';

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use('/', routesHandler);

const sequelize = new Sequelize('personal-project-ecf', 'admin', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Disable log SQL
});

// Example Model
const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL');
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MySQL:', error.message);
  });

// Disable some properties

app.disable('x-powered-by');