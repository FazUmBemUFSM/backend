/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            'Address',
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                street: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                number: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                district: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                zip_code: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            { schema: 'public' },
        );
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Address');
    },
};
