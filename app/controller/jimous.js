/*
 * @Date: 2022-01-25 17:51:46
 * @LastEditors: Please set LastEditors
 * @Description: 描述文件内容
 * @LastEditTime: 2022-04-07 17:36:06
 * @FilePath: \eggjs\app\controller\jimous.js
 */
'use strict';

const Controller = require('egg').Controller;

class JimousController extends Controller {
    async index() {
        const { ctx } = this;
        let chunkStr = 'hi, jimous';
        chunkStr += ctx.service.user.find(777);
        try {
            /**
             *  框架内置了 egg-cookies 插件，提供了 ctx.cookies，用于便捷、安全的读写 Cookie
             *  获取时的 options.signed 和 options.encrypt 要和 set() 的时候保持一致
             */
            let count = ctx.cookies.get('count', {
                encrypt: true,
            });
            count = count ? count : 0; // 如果配置了加密，那么count不可以是number类型
            ctx.cookies.set('count', '' + count, { encrypt: true });
            ctx.body = chunkStr + count;
            /** 
             * 框架内置了 Session 插件，给我们提供了 ctx.session 来访问或者修改当前用户 Session
             */
            // 修改 Session 的值
            ctx.session.visited = ctx.session.visited ? Number(ctx.session.visited) + 1 : 1;
        } catch (err) {
            this.logger.info(err);
            ctx.body = '触发错误' + err;
        }
        // 渲染模板 `app/view/home.tpl`
        // await ctx.render('home.tpl');
    }
}

module.exports = JimousController;
