/*
 * @Date: 2022-01-25 17:58:48
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2022-01-25 18:30:43
 * @FilePath: \eggjs\app\middleware\format-time.js
 */
'use strict';

module.exports = options => {
  return async function responseTime(ctx, next) {
    const start = Date.now();
    await next();
    const cost = Date.now() - start;
    ctx.set(options.headerKey, `${cost}ms`);
  };
};
