const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

// Define DiaryEntry model
const DiaryEntry = sequelize.define('DiaryEntry', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    weather: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true,
    tableName: 'diary_entries',
});

module.exports = DiaryEntry;
