/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            'Addresses',
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
                createdAt: {
                    type: Sequelize.DATE,
                },
                updatedAt: {
                    type: Sequelize.DATE,
                },
            },
            { schema: 'public' },
        );
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Addresses');
    },
};
