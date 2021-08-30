import { Sequelize } from 'sequelize';

const { DB_SCHEMA, DATABASE_URL, NODE_ENV } = process.env;

let options = null;

if (NODE_ENV == 'production')
    options = {
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
else
    options = {
        schema: DB_SCHEMA,
        dialect: 'postgress',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        logging: false,
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
