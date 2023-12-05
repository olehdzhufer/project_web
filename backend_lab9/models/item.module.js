const { DataTypes}= require("sequelize");
const sequelize = require("../models/db");
const Item = sequelize.define('item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'item',
    timestamps: false, // Якщо ваша таблиця не має поля для часу створення та оновлення
});

// Створює таблицю, якщо вона ще не існує
Item.sync();

module.exports = Item;
