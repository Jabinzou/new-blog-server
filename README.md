# blog-server

## Description

test for ts in node server
### project description

```json
--module
    ---- *.controller.ts //作为当前模块儿的逻辑处理层，包括http请求到处理都会经过这一层

    ---- *.module.ts //作为当前模块儿的封装，便于进行依赖注入,供其他模块使用，并且每一个模块都是一个共享模块，包含了当前模块所有的providers，controllers,imports，exports

    ---- *.service.ts // 提供了当前模块的所有的方法，用于处理逻辑层相关方法的集合

    ---- *.*.spec.ts // 用于单元测试
-- entities
    --- *..entity.ts // 数据库model
```

### pm2 manage the process
> you can find your project path,then you can execute `pm2 start npm --name project01 -- start` 

### typeorm logging
> nodemon watch the application and set env to resolve the 'logging' settting


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

