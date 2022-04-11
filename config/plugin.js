/*
 * @Date: 2022-01-25 17:39:08
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2022-04-11 22:53:30
 * @FilePath: \eggjs\config\plugin.js
 */
'use strict'

/** @type Egg.EggPlugin */
// module.exports = {
// had enabled by egg
// static: {
//   enable: true,
// }
// };

exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
}

exports.cors = {
    /** 开启CORS跨域配置 */
    enable: true,
    package: 'egg-cors',
}
