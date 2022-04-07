/*
 * @Date: 2022-01-25 17:39:08
 * @LastEditors: Please set LastEditors
 * @Description: 描述文件内容
 * @LastEditTime: 2022-04-07 11:05:57
 * @FilePath: \eggjs\config\config.default.js
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1643103520647_454';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
        // formatTime: {
        //   headerKey: 'X-Response-Jimous',
        //   enable: true,
        //   match: [ '/jimous' ],
        // },
    };
};
