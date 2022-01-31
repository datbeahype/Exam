const sequelize = require('../database')
const { DataTypes } = require('sequelize');

const Company = sequelize.define('company', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3,100]
        }
    },
    dateFounded: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Company;