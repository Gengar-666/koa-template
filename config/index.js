// 模板渲染中间件
const views = require('koa-views');

// generator 转换 async 语法 中间件
const convert = require('koa-convert');

// 解析 body 中间件
const bodyparser = require('koa-bodyparser');

// 静态文件服务中间件
const static = require('koa-static');

const config = (app) => {

  app.port = 3001

  app.use(convert(bodyparser()));

  app.use(static(__dirname + '/../assets'));

  app.use(views(__dirname + '/../views', { extension: 'swig' }));

}

const port = 3001

module.exports = { config, port };
