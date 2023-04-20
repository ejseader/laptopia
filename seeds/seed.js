const { Laptop } = require('../models')

const laptopData = 
    [{
        heading: 'Alienware M15 R7',
        price: 1000,
        brand: 'Alienware',
        model: 'M15 R7',
        oper_sys: 'Windows 11',
        condition: 'Very Good',
        description: 'Alienware M15 R7 with a 12th Gen Intel Core i7...'
      },
      {
        heading: 'Dell Latitude 3520',
        price: 700,
        brand: 'Dell',
        model: 'Latitude',
        oper_sys: 'Windows 10 Pro',
        condition: 'Good',
        description: 'Dell Latitude 3520 with an 11th Gen Intel Core i5'
      },
      {
        heading: 'MacBook Air',
        price: 850,
        brand: 'Apple',
        model: '2022 M1',
        oper_sys: 'macOS 12 (Monterey)',
        condition: 'Very Good',
        description: 'Virtually new 2022 MacBook Air with an M1 chip, 256GB SSD...'
      },
      {
        heading: 'MacBook - Parts Only',
        price: 300,
        brand: 'Apple',
        model: '2015',
        oper_sys: 'OSX',
        condition: 'Parts Only',
        description: 'Non-functioning 2015 Macbook Pro. 500GB SSD, 2GHz processor...'
      },
      {
        heading: 'ASUS TUF Dash F15',
        price: 650,
        brand: 'ASUS',
        model: 'TUF Dash F15 2022 15.6"',
        oper_sys: 'Windows 11 Home',
        condition: 'Excellent',
        description: 'Virtually new ASUS TUF Dash F15 with a 12th Gen Intel i7 core...'
      },
      {
        heading: 'Lenovo IdeaPad 3i',
        price: 975,
        brand: 'Lenovo',
        model: 'IdeaPad Gaming 3i',
        oper_sys: 'Windows 11 Home',
        condition: 'Good',
        description: 'Lenovo IdeaPad Gaming 3i with a 12th Gen Intel i7 core, 512GB SSD...'
    }]

const seedLaptop = () => Laptop.bulkCreate(laptopData) 

module.exports = seedLaptop