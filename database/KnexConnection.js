const knex = require('knex')

const K = knex({
    client: 'mysql2',
    connection: {
        host: "rpi.najjar.dev",
        port: 3306,
        user: "najjar-pad",
        password: "senha200",
        database: "najjar_pad"
    }
})

module.exports = K;
