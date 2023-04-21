const { User } = require('../models');

const userData = 
[{
  name: 'Eric',
  email: 'ejseader@gmail.com',
  password: 'password'
}]

const seedUser = () => User.bulkCreate(userData) 

module.exports = seedUser