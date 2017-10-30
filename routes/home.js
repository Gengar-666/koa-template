const Router = require('koa-router');
const HomeControllers = require('./../controllers/HomeControllers');

const router = new Router();

router.get('home', HomeControllers.fn);

module.exports = router;