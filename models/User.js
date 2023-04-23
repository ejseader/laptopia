const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');
const bcrypt = require('bcrypt');
const Laptop = require('./Laptop');

class User extends Model {
    async checkPassword(provided_password) {
        const is_valid = await bcrypt.compare(provided_password, this.password);

        return is_valid;
    }
}

User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
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
            const encrypted_pass = await bcrypt.hash(user.password, 10);

            user.password = encrypted_pass;
        }
    }
});

User.hasMany(Laptop);
Laptop.belongsTo(User);

module.exports = User