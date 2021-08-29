/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            'Institutions',
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                status: {
                    type: DataTypes.ENUM('registered', 'approved', 'rejected'),
                    defaultValue: 'registered',
                },
                address_id: {
                    type: DataTypes.INTEGER,
                    references: { model: 'Addresses', key: 'id' },
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
        await queryInterface.dropTable('Institutions');
    },
};
