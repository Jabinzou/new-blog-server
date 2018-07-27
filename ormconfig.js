'use strict';
module.exports = { // you can chose your real mysql database info
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "qwer1234",  
  database: "net_app",
  entities: ["src/**/**.entity{.ts,.js}"],
  synchronize: true,
  logging: process.env.NODE_ENV === 'development'
}
