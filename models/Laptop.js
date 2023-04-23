const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection')

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
        type: DataTypes.STRING
    }
}, {
    sequelize: db,
    timestamps: false,
    freezeTableName: true,
    modelName: 'laptop'
});

module.exports = Laptop;





   