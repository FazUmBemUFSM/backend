module.exports = {
    development: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
    test: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
        options: {
            ssl: true,
        },
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
        ssl: true,
    },
};
