const Router = require('koa-router');

const compose = require('koa-compose');

const HomeRouter = require('./home');

const router = new Router();

router.use('/', HomeRouter.routes(), HomeRouter.allowedMethods());

module.exports = () => compose([router.routes(), router.allowedMethods()]);
