'use strict';
const SOURCE_PATH = process.env.NODE_ENV === 'production' ? 'dist' : 'src';
module.exports = { // you can chose your real mysql database info
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "qwer1234",  
  database: "net_app",
  entities: [`${SOURCE_PATH}/**/**.entity{.ts,.js}`],
  synchronize: process.env.NODE_ENV === 'development' && false, // 正式环境同步数据库model 丢失数据，,需要去掉
  logging: process.env.NODE_ENV === 'development'
}
