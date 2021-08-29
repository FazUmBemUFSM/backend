import { Sequelize } from 'sequelize';

const { DB_SCHEMA, DATABASE_URL } = process.env;

const options = {
    schema: DB_SCHEMA,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    logging: false,
    ssl: true,
};

const sequelize = new Sequelize(`${DATABASE_URL}`, options);

sequelize
    .authenticate()
    .then(() => {
        console.info('The database connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

export default sequelize;
