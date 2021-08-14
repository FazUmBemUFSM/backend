/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            'Publications',
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                content: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                status: {
                    type: DataTypes.ENUM('created', 'published', 'removed'),
                    defaultValue: 'created',
                },
                institution_id: {
                    type: DataTypes.INTEGER,
                    references: { model: 'Institution', key: 'id' },
                },
            },
            { schema: 'public' },
        );
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Publications');
    },
};
