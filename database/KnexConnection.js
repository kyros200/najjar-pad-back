const knex = require('knex')

const K = knex({
    client: 'mysql2',
    connection: {
        host: "wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "ua2607gz3xvcu8jt",
        password: "lgu8nvi4fxxwxmhq",
        database: "yevndcb000ki3vvr"
    }
})

module.exports = K;
