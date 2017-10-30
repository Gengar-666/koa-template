const Koa = require('koa');

const config = require('./config');

const middleware = require('./middleware');

const routes = require('./routes');

const app = new Koa();

config.config(app);

// 中间件
app.use(middleware());

app.use(routes());

app.listen(config.port);

console.log('项目运行在端口：' + config.port);

module.exports = app;
