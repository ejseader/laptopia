const { Model, DataTypes } = require('sequelize');
<<<<<<< HEAD
const db = require('../db/connection');
=======
const db = require('../config/connection')
>>>>>>> 0d3f2dfdc607de09828482e6d3e28a30680d5a83

class Laptop extends Model { }

Laptop.init({
    heading: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.INTEGER,
    },
    brand: {
        type: DataTypes.STRING,
    },
    model: {
        type: DataTypes.STRING,
    },
    oper_sys: {
        type: DataTypes.STRING,
    },
    condition: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    filepath: {
        type: DataTypes.STRING,
    }
}, {
    sequelize: db,
    timestamps: false,
    freezeTableName: true,
    modelName: 'laptop'
});

module.exports = Laptop;





   