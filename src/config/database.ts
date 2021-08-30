import { Sequelize } from 'sequelize';

const { DB_SCHEMA, DATABASE_URL, SLL } = process.env;

const options = {
    schema: DB_SCHEMA,
    dialect: 'postgress',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    ssl: true,
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
};

const sequelize = new Sequelize(`${DATABASE_URL}`, Object(options));

sequelize
    .authenticate()
    .then(() => {
        console.info('The database connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

export default sequelize;
