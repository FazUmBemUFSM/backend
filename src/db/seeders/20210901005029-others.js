/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Curators',
            [
                {
                    name: 'Daniel',
                    email: 'dalibanori@inf.ufsm.br',
                    password: bcrypt.hashSync('1234', 10),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Bruno',
                    email: 'bbrossi@inf.ufsm.br',
                    password: bcrypt.hashSync('1234', 10),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Hierro',
                    email: 'hdscherer@inf.ufsm.br',
                    password: bcrypt.hashSync('1234', 10),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Curators', null, {});
    },
};
