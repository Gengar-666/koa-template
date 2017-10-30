const compose = require('koa-compose');

const redirect = require('./redirect');

module.exports = () => compose([redirect]);