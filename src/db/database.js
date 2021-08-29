module.exports = {
    development: {
        url: process.env.DATABASE_URL,
    },
    test: {
        username: 'root',
        password: null,
        database: 'fazumbem',
        host: '127.0.0.1',
        dialect: 'postgres',
        schema: 'public',
    },
    production: {
        username: 'root',
        password: null,
        database: 'fazumbem',
        host: '127.0.0.1',
        dialect: 'postgres',
        schema: 'public',
    },
};
