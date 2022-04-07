const egg = require('egg');
const workers = Number(require('os').cpus.length);
egg.startCluster({
    workers,
    baseDir: __dirname,
});
