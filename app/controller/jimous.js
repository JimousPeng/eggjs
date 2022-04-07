/*
 * @Date: 2022-01-25 17:51:46
 * @LastEditors: Please set LastEditors
 * @Description: 描述文件内容
 * @LastEditTime: 2022-04-07 11:44:07
 * @FilePath: \eggjs\app\controller\jimous.js
 */
'use strict';

const Controller = require('egg').Controller;

class JimousController extends Controller {
    async index() {
        const { ctx } = this;
        let chunkStr = 'hi, jimous';
        chunkStr += ctx.service.user.find(777);
        ctx.body = chunkStr;
        // 渲染模板 `app/view/home.tpl`
        // await ctx.render('home.tpl');
    }
}

module.exports = JimousController;
