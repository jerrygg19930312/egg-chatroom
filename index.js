const egg = require('egg');
egg.startCluster({
    sticky: true,
    baseDir: __dirname,
});