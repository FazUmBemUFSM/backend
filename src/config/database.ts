import { Sequelize } from 'sequelize';

import { DB_DIALECT } from '../utils/constants';

const { DB_HOST, DB_NAME, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_SCHEMA } = process.env;

const options = {
    schema: DB_SCHEMA,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

const sequelize = new Sequelize(
    `${DB_DIALECT}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    options,
);

sequelize
    .authenticate()
    .then(() => {
        console.info('The database connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

export default sequelize;
