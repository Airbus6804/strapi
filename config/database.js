module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            connectionString: env('DATABASE_URL'),
            schema: 'strapi'
        },
        debug: true,
        pool: { min: 0, max: 7 },
    }
});