/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            'Curator',
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
                user_id: {
                    type: DataTypes.INTEGER,
                    references: { model: 'User', key: 'id' },
                },
            },
            { schema: 'public' },
        );
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Curator');
    },
};
