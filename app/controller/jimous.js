/*
 * @Date: 2022-01-25 17:51:46
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2022-01-25 17:53:52
 * @FilePath: \eggjs\app\controller\jimous.js
 */
'use strict';

const Controller = require('egg').Controller;

class JimousController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, jimous';
    // 渲染模板 `app/view/home.tpl`
    // await ctx.render('home.tpl');
  }
}

module.exports = JimousController;
