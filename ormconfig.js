'use strict';
module.exports = { // you can chose your real mysql database info
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "qwer1234",  
  database: "net_app",
  entities: ["src/**/**.entity{.ts,.js}"],
  synchronize: process.env.NODE_ENV === 'development' && false, // 正是环境 可能会丢失数据，同步数据库model,需要去掉
  logging: process.env.NODE_ENV === 'development'
}
