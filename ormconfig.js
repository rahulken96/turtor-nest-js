require('dotenv').config();

module.exports = {
    name: 'default',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'turtor-nest',
    synchronize: true,
    dropSchema: false,
    logging: true,
    entities: [],
};