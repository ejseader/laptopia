const { Model, DataTypes } = require('sequelize')
const db = require('../config/connection')
const bcrypt = require('bcrypt')

const Laptop = require('./Laptop');

class User extends Model {
    static validatePass(user_entered_pass, hashed_password) {
        return bcrypt.compareSync(user_entered_pass, hashed_password)
    }
}

User.init({
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: {
                args: true,
                msg: 'You must enter a valid email address.'
            }
        },
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            len: {
                args: 8,
                msg: 'Your password must include at least 8 characters'
            }
        },
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'user',
    hooks: {
        async beforeCreate(user) {
            const encrypted = await bcrypt.hash(user.password, 10);
            user.password = encrypted;
        }
    }
});

module.exports = User
