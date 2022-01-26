/*
 * @Date: 2022-01-25 17:39:08
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2022-01-25 18:30:34
 * @FilePath: \eggjs\app\router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  const formatTime = app.middleware.formatTime({ headerKey: 'X-Jimous-Time' });
  router.get('/jimous', formatTime, controller.jimous.index);
};
