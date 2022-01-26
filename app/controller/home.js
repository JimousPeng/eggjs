/*
 * @Date: 2022-01-25 17:39:08
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2022-01-25 17:49:37
 * @FilePath: \eggjs\app\controller\home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    // 渲染模板 `app/view/home.tpl`
    // await ctx.render('home.tpl');
  }
}

module.exports = HomeController;
