
'use strict';
const os = require('os');
const path = require('path');
module.exports = {
  apps: [{
    name: 'blog_server',
    script: './dist/main.js',                      // 执行文件
    cwd: './',                                // 根目录
    interpreter: 'node', // 解释器
    interpreter_args: '-r ./tsconfig-paths-bootstrap.js', // 解释器参数
    min_uptime: 10000, // 启动10s以内挂掉的进程视为异常重启，超过默认最大重启次数15次之后即不再自动重启
    exec_mode: 'cluster',
    instances: process.env.INSTANCES || Math.floor(os.cpus().length * 0.75),
    env: {
      NODE_ENV: 'production'
    },
    out_file: './pm2Logs/out.log',
    error_file: './pm2Logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss SSS',
    merge_logs: true
  }]
};
