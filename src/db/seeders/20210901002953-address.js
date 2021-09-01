/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        let addressIds = await queryInterface.bulkInsert(
            'Addresses',
            [
                {
                    street: 'Av. Roraima',
                    number: '1000',
                    district: 'Camobi',
                    zip_code: '97.105-900',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    street: 'R. Erly de Almeida Lima',
                    number: '447',
                    district: 'Camobi',
                    zip_code: '97105-120',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    street: 'R. Vale Machado',
                    number: '1454',
                    district: 'Centro',
                    zip_code: '97010-530',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    street: 'R. Erly de Almeida Lima',
                    number: '365',
                    district: 'Camobi',
                    zip_code: '97.105-120',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    street: 'R. Antônio Loza',
                    number: '46',
                    district: 'Nossa Senhora de Lourdes',
                    zip_code: '97060-060',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            { returning: ['id'] },
        );

        let institutionIds = await queryInterface.bulkInsert(
            'Institutions',
            [
                {
                    name: 'Casa Maria',
                    email: 'casamaria@email.com',
                    password: bcrypt.hashSync('1234', 10),
                    status: 'registered',
                    address_id: addressIds[0].id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Centro de Apoio a Criança com Câncer',
                    email: 'centrodeapoioacriancacomcancer@email.com',
                    password: bcrypt.hashSync('1234', 10),
                    status: 'registered',
                    address_id: addressIds[1].id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'AAPECAN ',
                    email: 'AAPECAN @email.com',
                    password: bcrypt.hashSync('1234', 10),
                    status: 'registered',
                    address_id: addressIds[2].id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            { returning: ['id'] },
        );

        await queryInterface.bulkInsert(
            'Publications',
            [
                {
                    title: 'Publicação 1',
                    content: 'Esta é uma publicação de teste',
                    status: 'created',
                    temporary: true,
                    temporary_start_date: new Date(),
                    temporary_end_date: new Date(),
                    institution_id: institutionIds[0].id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: 'Publicação 2',
                    content: 'Esta é uma publicação de teste',
                    status: 'created',
                    temporary: true,
                    temporary_start_date: new Date(),
                    temporary_end_date: new Date(),
                    institution_id: institutionIds[1].id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: 'Publicação 3',
                    content: 'Esta é uma publicação de teste',
                    status: 'created',
                    temporary: true,
                    temporary_start_date: new Date(),
                    temporary_end_date: new Date(),
                    institution_id: institutionIds[2].id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Addresses', null, {});
        await queryInterface.bulkDelete('Institutions', null, {});
        await queryInterface.bulkDelete('Publications', null, {});
    },
};
